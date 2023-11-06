import {
	ISubscriber, PaginationByPage,
} from '~/types';

const DEFAULT_ALREADY_SUBSCRIBED = 658;

export const useSubscriber = () => {
	const isLoading = ref(false);
	const hasSubmited = ref(false);
	const alreadySubscribed = ref(DEFAULT_ALREADY_SUBSCRIBED);

	const { create } = useStrapi<ISubscriber>();

	const submitForm = async (data: any) => {
		isLoading.value = true;

		try {
			await create('create-mail', {
				name: data.name,
				email: data.email,
				message: data.message,
			});

			hasSubmited.value = true;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		alreadySubscribed,
		isLoading,
		hasSubmited,
		submitForm,
	};
};
