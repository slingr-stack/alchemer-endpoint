////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.account = {};

endpoint.accountteams = {};

endpoint.accountuser = {};

endpoint.domain = {};

endpoint.sso = {};

endpoint.surveytheme = {};

endpoint.contactlist = {};

endpoint.contactlist.contactlistcontact = {};

endpoint.contactcustomfield = {};

endpoint.survey = {};

endpoint.survey.surveypage = {};

endpoint.survey.surveyquestion = {};

endpoint.survey.surveyquestion.surveyoption = {};

endpoint.survey.surveycampaign = {};

endpoint.survey.surveycampaign.surveycontact = {};

endpoint.survey.surveycampaign.emailmessage = {};

endpoint.survey.surveyresponse = {};

endpoint.survey.surveystatistic = {};

endpoint.survey.surveyreport = {};

endpoint.survey.quotas = {};

endpoint.account.get = function(httpOptions) {
    var url = parse('/account');
    sys.logs.debug('[alchemer] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.accountteams.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/accountteams');
			break;
		case 1:
			url = parse('/accountteams/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.accountteams.put = function(httpOptions) {
    var url = parse('/accountteams');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.accountteams.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountteams/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.accountteams.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountteams/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.accountuser.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/accountuser');
			break;
		case 1:
			url = parse('/accountuser/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.accountuser.put = function(httpOptions) {
    var url = parse('/accountuser');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.accountuser.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountuser/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.accountuser.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accountuser/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.domain.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/domain');
			break;
		case 1:
			url = parse('/domain/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.domain.put = function(httpOptions) {
    var url = parse('/domain');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.domain.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/domain/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.domain.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/domain/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sso.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/sso');
			break;
		case 1:
			url = parse('/sso/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sso.put = function(httpOptions) {
    var url = parse('/sso');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.sso.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/sso/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sso.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/sso/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.surveytheme.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/surveytheme');
			break;
		case 1:
			url = parse('/surveytheme/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.surveytheme.put = function(httpOptions) {
    var url = parse('/surveytheme');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.surveytheme.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/surveytheme/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.surveytheme.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/surveytheme/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.contactlist.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/contactlist');
			break;
		case 1:
			url = parse('/contactlist/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.contactlist.put = function(httpOptions) {
    var url = parse('/contactlist');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.contactlist.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactlist/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.contactlist.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactlist/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.contactlist.contactlistcontact.get = function(contactListId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/contactlist/:contactListId/contactlistcontact', [contactListId]);
			break;
		case 2:
			url = parse('/contactlist/:contactListId/contactlistcontact/:id', [contactListId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.contactlist.contactlistcontact.put = function(contactListId, httpOptions) {
    if (!contactListId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [contactListId].');
        return;
    }
    var url = parse('/contactlist/:contactListId/contactlistcontact', [contactListId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.contactlist.contactlistcontact.post = function(contactListId, id, httpOptions) {
    if (!contactListId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [contactListId,id].');
        return;
    }
    var url = parse('/contactlist/:contactListId/contactlistcontact/:id', [contactListId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.contactlist.contactlistcontact.delete = function(contactListId, id, httpOptions) {
    if (!contactListId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [contactListId,id].');
        return;
    }
    var url = parse('/contactlist/:contactListId/contactlistcontact/:id', [contactListId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.contactcustomfield.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/contactcustomfield');
			break;
		case 1:
			url = parse('/contactcustomfield/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.contactcustomfield.put = function(httpOptions) {
    var url = parse('/contactcustomfield');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.contactcustomfield.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactcustomfield/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.contactcustomfield.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/contactcustomfield/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/survey');
			break;
		case 1:
			url = parse('/survey/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.put = function(httpOptions) {
    var url = parse('/survey');
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/survey/:id', [id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/survey/:id', [id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveypage.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveypage', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveypage/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveypage.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveypage', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveypage.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveypage/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveypage.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveypage/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveyquestion.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveyquestion', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveyquestion/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveyquestion.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyquestion', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveyquestion.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyquestion/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveyquestion.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyquestion/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveyquestion.surveyoption.get = function(surveyOption, surveyQuestionId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption', [surveyOption, surveyQuestionId]);
			break;
		case 3:
			url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id', [surveyOption, surveyQuestionId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveyquestion.surveyoption.put = function(surveyOption, surveyQuestionId, httpOptions) {
    if (!surveyOption || !surveyQuestionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyOption,surveyQuestionId].');
        return;
    }
    var url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption', [surveyOption, surveyQuestionId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveyquestion.surveyoption.post = function(surveyOption, surveyQuestionId, id, httpOptions) {
    if (!surveyOption || !surveyQuestionId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyOption,surveyQuestionId,id].');
        return;
    }
    var url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id', [surveyOption, surveyQuestionId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveyquestion.surveyoption.delete = function(surveyOption, surveyQuestionId, id, httpOptions) {
    if (!surveyOption || !surveyQuestionId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyOption,surveyQuestionId,id].');
        return;
    }
    var url = parse('/survey/:surveyOption/surveyquestion/:surveyQuestionId/surveyoption/:id', [surveyOption, surveyQuestionId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveycampaign.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveycampaign', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveycampaign/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveycampaign.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveycampaign.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveycampaign.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveycampaign.surveycontact.get = function(surveyId, surveyCampaignId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact', [surveyId, surveyCampaignId]);
			break;
		case 3:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id', [surveyId, surveyCampaignId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveycampaign.surveycontact.put = function(surveyId, surveyCampaignId, httpOptions) {
    if (!surveyId || !surveyCampaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact', [surveyId, surveyCampaignId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveycampaign.surveycontact.post = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveycampaign.surveycontact.delete = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/surveycontact/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveycampaign.emailmessage.get = function(surveyId, surveyCampaignId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage', [surveyId, surveyCampaignId]);
			break;
		case 3:
			url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id', [surveyId, surveyCampaignId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveycampaign.emailmessage.put = function(surveyId, surveyCampaignId, httpOptions) {
    if (!surveyId || !surveyCampaignId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage', [surveyId, surveyCampaignId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveycampaign.emailmessage.post = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveycampaign.emailmessage.delete = function(surveyId, surveyCampaignId, id, httpOptions) {
    if (!surveyId || !surveyCampaignId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,surveyCampaignId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveycampaign/:surveyCampaignId/emailmessage/:id', [surveyId, surveyCampaignId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveyresponse.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveyresponse', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveyresponse/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveyresponse.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyresponse', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveyresponse.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyresponse/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveyresponse.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyresponse/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveystatistic.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveystatistic', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveystatistic/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveystatistic.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveystatistic', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveystatistic.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveystatistic/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveystatistic.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveystatistic/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.surveyreport.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/surveyreport', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/surveyreport/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.surveyreport.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyreport', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.surveyreport.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyreport/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.surveyreport.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/surveyreport/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.survey.quotas.get = function(surveyId, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/survey/:surveyId/quotas', [surveyId]);
			break;
		case 2:
			url = parse('/survey/:surveyId/quotas/:id', [surveyId, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[alchemer] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.survey.quotas.put = function(surveyId, httpOptions) {
    if (!surveyId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId].');
        return;
    }
    var url = parse('/survey/:surveyId/quotas', [surveyId]);
    sys.logs.debug('[alchemer] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.survey.quotas.post = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/quotas/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.survey.quotas.delete = function(surveyId, id, httpOptions) {
    if (!surveyId || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [surveyId,id].');
        return;
    }
    var url = parse('/survey/:surveyId/quotas/:id', [surveyId, id]);
    sys.logs.debug('[alchemer] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}