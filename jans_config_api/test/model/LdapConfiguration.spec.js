/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.LdapConfiguration();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LdapConfiguration', function() {
    it('should create an instance of LdapConfiguration', function() {
      // uncomment below and update the code to test LdapConfiguration
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be.a(JansConfigApi.LdapConfiguration);
    });

    it('should have the property configId (base name: "configId")', function() {
      // uncomment below and update the code to test the property configId
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property bindDN (base name: "bindDN")', function() {
      // uncomment below and update the code to test the property bindDN
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property bindPassword (base name: "bindPassword")', function() {
      // uncomment below and update the code to test the property bindPassword
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property servers (base name: "servers")', function() {
      // uncomment below and update the code to test the property servers
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property maxConnections (base name: "maxConnections")', function() {
      // uncomment below and update the code to test the property maxConnections
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property useSSL (base name: "useSSL")', function() {
      // uncomment below and update the code to test the property useSSL
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property baseDNs (base name: "baseDNs")', function() {
      // uncomment below and update the code to test the property baseDNs
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property primaryKey (base name: "primaryKey")', function() {
      // uncomment below and update the code to test the property primaryKey
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property localPrimaryKey (base name: "localPrimaryKey")', function() {
      // uncomment below and update the code to test the property localPrimaryKey
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property useAnonymousBind (base name: "useAnonymousBind")', function() {
      // uncomment below and update the code to test the property useAnonymousBind
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new JansConfigApi.LdapConfiguration();
      //expect(instance).to.be();
    });

  });

}));