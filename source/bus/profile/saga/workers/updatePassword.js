// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { profileActions } from '../../../profile/actions';
import { uiActions } from '../../../ui/actions';

export function* updatePassword ({ payload: { passwordData: { oldPassword, newPassword }, resetForm }}) {

    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [{ oldPassword, newPassword }]);

        const { data: updatedProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(updatedProfile));
        // Clear form info
        resetForm();

    } catch (error) {
        yield put(uiActions.emitError(error, 'updatePassword worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }

}
