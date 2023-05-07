import { AuthenticationHandler } from '@/store/modules/authentication';

export default {
    hasUserPermission(context, permission) {
        const user = AuthenticationHandler.getUser(context);

        if (user != null) {
            return user.roles.includes(UserPermission.ADMIN) || user.roles.includes(permission);
        }
        return false;
    }
};

export const UserPermission = {
    ADMIN: 'SGT_ADMIN'
};
