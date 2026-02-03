
export const route_constants = {

    Accounts: {
        me: "/api/accounts/me",
    },

    Audit: {
        audit: "/api/audit",
    },

    Organisation: {
        org: "/api/organisations",                    //For getting organization 
        create_org: "/api/organisations",             //for creatinf an organizations
        org_id: "/api/organisations/{org_id}",         //for getting, specific organization
        update_org: "/api/organisations/{org_id}",     //for updating specific organization
        delete_org: "/api/organisations/{org_id}",     //for deleting specific organization
    },

    // public registrations routes
    Registrations: {
        register: "/api/organisations/register",      //for registering a user
    },

    // User Management routes
    Users: {
        AUDIT_ALL_DOCUMENTS:"/api/audit/",
        create_user: "/api/organisations/organisations/{org_id}/users/add",                   
        update_user_status: "/api/organisations/user-role/{uor_id}/status",               
        update_user_role: "/api/organisations/user-role/{uor_id}/end-date",

}
}
