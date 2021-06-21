/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines-per-function */
import * as sinon from 'sinon';
import { expect } from 'chai';
import ActiveDirectoryService from '../src/service/activeDirectory';

let sandbox: sinon.SinonSandbox;
const adService = new ActiveDirectoryService();

describe('Tests suite - Plan Service.', () => {
  beforeEach('Before each test', () => {
    sandbox = sinon.createSandbox();
  });

  afterEach('After each test', () => {
    sandbox.restore();
  });

  it('SUCESS: Should register customer', async () => {
    // sandbox.stub(AWS.DynamoDB.DocumentClient.prototype, 'put').returns(returnValueMock);
    const response = await adService.signin('williamcezart@gmail.com', 'teste123');
    console.log('Response ::', response);
    expect(response).to.equal(201);
  });
});
