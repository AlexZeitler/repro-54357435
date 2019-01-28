'use strict';

const assert = require('assert');
const Claim = require("../dist/security/Claim").Claim;

describe('req', () => {
  it('should ', done => {
    /** @type {AuthenticatedRequest} */
    const req = {};
    req.user = { claims: [new Claim('tenantId', '123')] };
    assert.strictEqual(req.user.claims[ 0 ].type, 'tenantId');
    assert.strictEqual(req.user.claims[ 0 ].value, '123');
    return done();
  });
});
