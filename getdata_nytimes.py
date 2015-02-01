'''
Created on Jan 30, 2015
IWMF Hackathon - The Gender Report
Gets data from the NYTimes API
@author: Mimi_2
'''
import urllib
import urllib2
import json
import pprint

search_params = {}
#q     Search query term. Search is performed on the article body, headline and byline.
#search_params['q'] = ''
#fq     Filtered search query using standard Lucene syntax.
#search_params['fq'] = 'section_name:("Front Page")'
search_params['fl'] = 'byline,print_page,news_desk,keywords,pub_date'
search_params['sort']='newest'
search_params['api-key'] = '###'

#URL for the gender API to determine gender of first names
genderapi = 'http://api.genderize.io?name='
genderapi2 = 'https://gender-api.com/get'

'''
#control page numbers - note that currently pages are not allowed over 100... so need to search with begin and end date
for i in range (1,101):
    #initialize articles list
    articles = []
    search_params['page']=str(i)
    url_params = urllib.urlencode(search_params)
    print url_params
    api_url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json'
    
    try: results = urllib2.urlopen(api_url + '?' + url_params)
    except urllib2.URLError as e:
        print e.reason
        
    data = json.load(results)
    docs = data['response']['docs']
    
    for doc in docs:
        article = {}
        if doc['byline'] is not None:
            if len(doc['byline']) > 0 and len(doc['byline']['person']) >0:
                firstname =  doc['byline']['person'][0]['firstname']
                article['firstname'] = firstname
                article['pub_date'] = doc['pub_date']
                article['news_desk'] = doc['news_desk']
                article['gender'] = json.load(urllib2.urlopen(genderapi2 + '?name=' + firstname + '&key=###'))['gender']
                #json.load(urllib2.urlopen(genderapi + firstname))['gender']
                article['print_page'] = doc['print_page']
                print article
                articles.append(article)
    if len(articles) > 0:
        json_string = json.dumps(articles)
        with open('json_dump2.txt', 'a') as f:
            f.write(json_string)
    del articles[:]

'''
#Block to get next 100 articles based on end date... from last block
#to improve the code, you can use dynamic end_date within the forloop so you do not need to exceed 100 pages...
for i in range (1,101):
    #initialize articles list
    articles = []
    search_params['end_date'] = '19800130'
    search_params['page']=str(i)
    url_params = urllib.urlencode(search_params)
    print url_params
    api_url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json'
    
    try: results = urllib2.urlopen(api_url + '?' + url_params)
    except urllib2.URLError as e:
        print e.reason
        
    data = json.load(results)
    docs = data['response']['docs']
    
    for doc in docs:
        article = {}
        if doc['byline'] is not None:
            if 'person' in doc['byline']:
                if len(doc['byline']) > 0 and len(doc['byline']['person']) >0 and 'firstname' in doc['byline']['person'][0]:
                    firstname =  doc['byline']['person'][0]['firstname']
                    article['firstname'] = firstname
                    article['pub_date'] = doc['pub_date']
                    article['news_desk'] = doc['news_desk']
                    article['gender'] = json.load(urllib2.urlopen(genderapi2 + '?name=' + firstname + '&key=###'))['gender']
                    #json.load(urllib2.urlopen(genderapi + firstname))['gender']
                    article['print_page'] = doc['print_page']
                    print article
                    articles.append(article)
    if len(articles) > 0:
        json_string = json.dumps(articles)
        with open('json_dump2.txt', 'a') as f:
            f.write(json_string)
    del articles[:]



