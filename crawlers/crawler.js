const cheerio = require('cheerio');
const request = require('request');

const redditUrl = 'https://old.reddit.com';

const findTopPosts = (subreddit) => {
    request(redditUrl + '/r/' + subreddit, function(err, res, body) {
        if (err){ console.log('Erro: ' + err); };
        
        const $ = cheerio.load(body);

        const posts = $('#siteTable div.thing');
        const result = posts.filter((index, content) => {
            return ($(content).attr('data-score') > 5000)
        });

        const topResults = result.map((index, content) => {
            return {
                score: $(content).attr('data-score'),
                subreddit: $(content).attr('data-subreddit'),
                title: $(content).find('a.title').text(),
                commentsLink: redditUrl + $(content).attr('data-permalink'),
                postLink: $(content).attr('data-url'),
            }
        })
        
        return topResults
    });
};

const yourReading = (subreddits) => {
    const list = subreddits.split(';')

    return list.map((subreddit) => { return findTopPosts(subreddit)})
};


let posts = yourReading('news;cats;dogs')

console.log('posts', posts)