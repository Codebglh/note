@js:
let url  = config.host +"/search.php";

let hp={
    "step":"2",
    "seekfid":"all",
    "keyword":params.keyWord,
    "orderway":"lastpost",
    "method":"AND",
    "sch_time":"all",
    "page":params.pageIndex
};

let hh = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36",
    "Referer":"https://bbs.fanfanq.com/searcher.php"
}



return {
    'url':url, 
    'POST':false, 
    'httpParams':hp,
    "httpHeaders": config.httpHeaders,
    'webView':true,
    'cacheTime':3600
};