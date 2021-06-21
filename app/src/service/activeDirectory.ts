import ActiveDirectory from 'activedirectory';

class ActiveDirectoryService {
    async signin(username: string, password: string) {
        const config = {
            url: 'ldap://dc.domain.com',
            baseDN: 'dc=domain,dc=com'
        };
        var ad = new ActiveDirectory(config);
        const response = await ad.authenticate(username, password);
    }
}

export default ActiveDirectoryService;
