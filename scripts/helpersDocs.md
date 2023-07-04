# Javascript API

The Javascript API of the alchemer endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`PUT`,`POST`,`DELETE` requests to the [alchemer API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.alchemer.get('/survey')
var response = app.endpoints.alchemer.put('/survey/:surveyId/surveyresponse', body)
var response = app.endpoints.alchemer.put('/survey/:surveyId/surveyresponse')
var response = app.endpoints.alchemer.post('/survey/:surveyId/surveystatistic/:id', body)
var response = app.endpoints.alchemer.post('/survey/:surveyId/surveystatistic/:id')
var response = app.endpoints.alchemer.delete('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/account'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.account.get()
```
---
* API URL: '/accountteams'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.accountteams.get()
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.accountteams.get()
```
---
* API URL: '/accountuser'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.accountuser.get()
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.accountuser.get()
```
---
* API URL: '/domain'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.domain.get()
```
---
* API URL: '/domain/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.domain.get()
```
---
* API URL: '/sso'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.sso.get()
```
---
* API URL: '/sso/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.sso.get()
```
---
* API URL: '/surveytheme'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.surveytheme.get()
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.surveytheme.get()
```
---
* API URL: '/contactlist'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.contactlist.get()
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.contactlist.get()
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.contactlist.contactlistcontact.get()
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.contactlist.contactlistcontact.get(contactListId)
```
---
* API URL: '/contactcustomfield'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.contactcustomfield.get()
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.contactcustomfield.get()
```
---
* API URL: '/survey'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.get()
```
---
* API URL: '/survey/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.get()
```
---
* API URL: '/survey/:surveyId/surveypage'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveypage.get()
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveypage.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyquestion'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyquestion.get()
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyquestion.get(surveyId)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyquestion.surveyoption.get(surveyOption)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyquestion.surveyoption.get(surveyOption, surveyQuestionId)
```
---
* API URL: '/survey/:surveyId/surveycampaign'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveycampaign.get()
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveycampaign.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveycampaign.surveycontact.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveycampaign.surveycontact.get(surveyId, surveyCampaignId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveycampaign.emailmessage.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveycampaign.emailmessage.get(surveyId, surveyCampaignId)
```
---
* API URL: '/survey/:surveyId/surveyresponse'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyresponse.get()
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyresponse.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveystatistic'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveystatistic.get()
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveystatistic.get(surveyId)
```
---
* API URL: '/survey/:surveyId/surveyreport'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyreport.get()
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.surveyreport.get(surveyId)
```
---
* API URL: '/survey/:surveyId/quotas'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.quotas.get()
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.alchemer.survey.quotas.get(surveyId)
```
---
* API URL: '/accountteams'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.accountteams.put(body)
```
---
* API URL: '/accountuser'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.accountuser.put(body)
```
---
* API URL: '/domain'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.domain.put(body)
```
---
* API URL: '/sso'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.sso.put(body)
```
---
* API URL: '/surveytheme'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.surveytheme.put(body)
```
---
* API URL: '/contactlist'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.contactlist.put(body)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.contactlist.contactlistcontact.put(contactListId, body)
```
---
* API URL: '/contactcustomfield'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.contactcustomfield.put(body)
```
---
* API URL: '/survey'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.put(body)
```
---
* API URL: '/survey/:surveyId/surveypage'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveypage.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyquestion'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveyquestion.put(surveyId, body)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveyquestion.surveyoption.put(surveyOption, surveyQuestionId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveycampaign.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveycampaign.surveycontact.put(surveyId, surveyCampaignId, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveycampaign.emailmessage.put(surveyId, surveyCampaignId, body)
```
---
* API URL: '/survey/:surveyId/surveyresponse'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveyresponse.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveystatistic'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveystatistic.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/surveyreport'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.surveyreport.put(surveyId, body)
```
---
* API URL: '/survey/:surveyId/quotas'
* HTTP Method: 'PUT'
```javascript
app.endpoints.alchemer.survey.quotas.put(surveyId, body)
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.accountteams.post(id, body)
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.accountuser.post(id, body)
```
---
* API URL: '/domain/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.domain.post(id, body)
```
---
* API URL: '/sso/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.sso.post(id, body)
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.surveytheme.post(id, body)
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.contactlist.post(id, body)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.contactlist.contactlistcontact.post(contactListId, id, body)
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.contactcustomfield.post(id, body)
```
---
* API URL: '/survey/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.post(id, body)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveypage.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveyquestion.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveyquestion.surveyoption.post(surveyOption, surveyQuestionId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveycampaign.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveycampaign.surveycontact.post(surveyId, surveyCampaignId, id, body)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveycampaign.emailmessage.post(surveyId, surveyCampaignId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveyresponse.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveystatistic.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.surveyreport.post(surveyId, id, body)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.alchemer.survey.quotas.post(surveyId, id, body)
```
---
* API URL: '/accountteams/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.accountteams.delete(id)
```
---
* API URL: '/accountuser/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.accountuser.delete(id)
```
---
* API URL: '/domain/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.domain.delete(id)
```
---
* API URL: '/sso/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.sso.delete(id)
```
---
* API URL: '/surveytheme/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.surveytheme.delete(id)
```
---
* API URL: '/contactlist/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.contactlist.delete(id)
```
---
* API URL: '/contactlist/:contactListId/contactlistcontact/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.contactlist.contactlistcontact.delete(contactListId, id)
```
---
* API URL: '/contactcustomfield/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.contactcustomfield.delete(id)
```
---
* API URL: '/survey/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.delete(id)
```
---
* API URL: '/survey/:surveyId/surveypage/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveypage.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyquestion/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveyquestion.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveyquestion.surveyoption.delete(surveyOption, surveyQuestionId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveycampaign.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveycampaign.surveycontact.delete(surveyId, surveyCampaignId, id)
```
---
* API URL: '/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveycampaign.emailmessage.delete(surveyId, surveyCampaignId, id)
```
---
* API URL: '/survey/:surveyId/surveyresponse/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveyresponse.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveystatistic/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveystatistic.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/surveyreport/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.surveyreport.delete(surveyId, id)
```
---
* API URL: '/survey/:surveyId/quotas/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.alchemer.survey.quotas.delete(surveyId, id)
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,PUT,POST,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/account<br>/accountteams<br>/accountteams/{id}<br>/accountuser<br>/accountuser/{id}<br>/domain<br>/domain/{id}<br>/sso<br>/sso/{id}<br>/surveytheme<br>/surveytheme/{id}<br>/contactlist<br>/contactlist/{id}<br>/contactlist/{contactListId}/contactlistcontact<br>/contactlist/{contactListId}/contactlistcontact/{id}<br>/contactcustomfield<br>/contactcustomfield/{id}<br>/survey<br>/survey/{id}<br>/survey/{surveyId}/surveypage<br>/survey/{surveyId}/surveypage/{id}<br>/survey/{surveyId}/surveyquestion<br>/survey/{surveyId}/surveyquestion/{id}<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption/{id}<br>/survey/{surveyId}/surveycampaign<br>/survey/{surveyId}/surveycampaign/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage/{id}<br>/survey/{surveyId}/surveyresponse<br>/survey/{surveyId}/surveyresponse/{id}<br>/survey/{surveyId}/surveystatistic<br>/survey/{surveyId}/surveystatistic/{id}<br>/survey/{surveyId}/surveyreport<br>/survey/{surveyId}/surveyreport/{id}<br>/survey/{surveyId}/quotas<br>/survey/{surveyId}/quotas/{id}<br>/accountteams<br>/accountuser<br>/domain<br>/sso<br>/surveytheme<br>/contactlist<br>/contactlist/{contactListId}/contactlistcontact<br>/contactcustomfield<br>/survey<br>/survey/{surveyId}/surveypage<br>/survey/{surveyId}/surveyquestion<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption<br>/survey/{surveyId}/surveycampaign<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage<br>/survey/{surveyId}/surveyresponse<br>/survey/{surveyId}/surveystatistic<br>/survey/{surveyId}/surveyreport<br>/survey/{surveyId}/quotas<br>/accountteams/{id}<br>/accountuser/{id}<br>/domain/{id}<br>/sso/{id}<br>/surveytheme/{id}<br>/contactlist/{id}<br>/contactlist/{contactListId}/contactlistcontact/{id}<br>/contactcustomfield/{id}<br>/survey/{id}<br>/survey/{surveyId}/surveypage/{id}<br>/survey/{surveyId}/surveyquestion/{id}<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption/{id}<br>/survey/{surveyId}/surveycampaign/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage/{id}<br>/survey/{surveyId}/surveyresponse/{id}<br>/survey/{surveyId}/surveystatistic/{id}<br>/survey/{surveyId}/surveyreport/{id}<br>/survey/{surveyId}/quotas/{id}<br>/accountteams/{id}<br>/accountuser/{id}<br>/domain/{id}<br>/sso/{id}<br>/surveytheme/{id}<br>/contactlist/{id}<br>/contactlist/{contactListId}/contactlistcontact/{id}<br>/contactcustomfield/{id}<br>/survey/{id}<br>/survey/{surveyId}/surveypage/{id}<br>/survey/{surveyId}/surveyquestion/{id}<br>/survey/{surveyOption}/surveyquestion/{surveyQuestionId}/surveyoption/{id}<br>/survey/{surveyId}/surveycampaign/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/surveycontact/{id}<br>/survey/{surveyId}/surveycampaign/{surveyCampaignId}/emailmessage/{id}<br>/survey/{surveyId}/surveyresponse/{id}<br>/survey/{surveyId}/surveystatistic/{id}<br>/survey/{surveyId}/surveyreport/{id}<br>/survey/{surveyId}/quotas/{id}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*