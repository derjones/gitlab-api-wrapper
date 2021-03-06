
'use strict';

/*eslint-disable */
const ModelBase = require('../modelBase');

/**
 * Class representing Protected Branches .
 */
class ProtectedBranches extends ModelBase {

     /**
     * Create Protected Branches .
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }


    /**
     * Valid access levels.

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    protectedBranchesApi(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/protected_branches`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a list of protected branches from a project..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @returns {*}
     */

    listProtectedBranches(id, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/protected_branches`, params); // eslint-disable-line quotes
    }

    /**
     * Gets a single protected branch or wildcard protected branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param name {string} - The name of the branch or wildcard
     * @param params {object}
     * @returns {*}
     */

    getASingleProtectedBranchOrWildcardProtectedBranch(id, name, params) { // eslint-disable-line camelcase
        return this.http.get(`/projects/${encodeURIComponent(id)}/protected_branches/${encodeURIComponent(name)}`, params); // eslint-disable-line quotes
    }

    /**
     * Protects a single repository branch or several project repository
branches using a wildcard protected branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param params {object}
     * @param params.name {string} - The name of the branch or wildcard
     * @param params.push_access_level {string} - Access levels allowed to push (defaults: 40, maintainer access level)
     * @param params.merge_access_level {string} - Access levels allowed to merge (defaults: 40, maintainer access level)
     * @param params.unprotect_access_level {string} - Access levels allowed to unprotect (defaults: 40, maintainer access level)
     * @param params.allowed_to_push {array} - Array of access levels allowed to push, with each described by a hash
     * @param params.allowed_to_merge {array} - Array of access levels allowed to merge, with each described by a hash
     * @param params.allowed_to_unprotect {array} - Array of access levels allowed to unprotect, with each described by a hash
     * @returns {*}
     */

    protectRepositoryBranches(id, params) { // eslint-disable-line camelcase
        return this.http.post(`/projects/${encodeURIComponent(id)}/protected_branches`, params); // eslint-disable-line quotes
    }

    /**
     * Unprotects the given protected branch or wildcard protected branch..

     * @param id {integer/string} - The ID or URL-encoded path of the project owned by the authenticated user
     * @param name {string} - The name of the branch
     * @param params {object}
     * @returns {*}
     */

    unprotectRepositoryBranches(id, name, params) { // eslint-disable-line camelcase
        return this.http.delete(`/projects/${encodeURIComponent(id)}/protected_branches/${encodeURIComponent(name)}`, params); // eslint-disable-line quotes
    }

}

module.exports = ProtectedBranches;

