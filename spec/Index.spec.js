var path = require('path');

describe('Expressions Test', function() {
	browser.get('http://localhost:8080');

	it('should say no emails', function() {
		expect(element(by.css('h6')).getInnerHtml()).toEqual('You have no emails');
	});

	it('should say the number of emails', function() {
		element(by.css('button')).click();

		expect(element(by.css('h6')).getInnerHtml()).toEqual('You have 1 emails');

		element(by.css('button')).click();

		expect(element(by.css('h6')).getInnerHtml()).toEqual('You have 2 emails');
	});
});