import DensityAxios from './axios';
import { store } from '../../redux/store';
import { updateSpace } from '../../redux/data/data.actions';

let ws: WebSocket;

// Websocket Real Time Events
export const START_LISTENING = async () => {
	try {
		const wsRes = await DensityAxios.post('sockets');

		ws = new WebSocket(wsRes.data.url);

		ws.onopen = () => {};

		ws.onmessage = (e) => {
			const data = JSON.parse(e.data);
			console.log('Listener Message', data);

			if (data?.payload?.type === 'count') {
				store.dispatch(updateSpace({ id: data.payload.space_id, count: data.payload.count }));
			}
		};

		ws.onerror = (e: any) => {
			// an error occurred
			console.error('Listener error', e.message);
		};

		ws.onclose = (e) => {};
	} catch (err) {
		console.error('err: ', err);
	}
};

export const STOP_LISTENING = () => {
	try {
		ws.close
	} catch (err) {
		console.error('Close err: ', err);
	}
}