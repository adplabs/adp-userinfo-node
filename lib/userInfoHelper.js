/*
Copyright © 2015-2016 ADP, LLC.

Licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.  See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var AdpApiProduct = require('adp-core').adpApiProduct;
/**
@class UserInfoHelper
*/
function UserInfoHelper(connection) {

	var apiProductInstance = new AdpApiProduct().createApiProduct(connection, 'UserInfo');

	/**
	@memberof UserInfoHelper
	@description Calls the user info API and returns JSON payload.
	@param opts {object} Object literal representing any options for the HTTP request.
	@param cb {function} callback to be executed upon response from HTTP request.
	@returns {void}
	*/
	this.getUserInfo = function getUserInfo(opts, cb) {
		apiProductInstance.call('read', opts, cb);
	};

}

module.exports = UserInfoHelper;
