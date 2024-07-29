import EasyUpload from './EasyUpload.vue';

EasyUpload.name = 'easy-upload';

EasyUpload.install = (Vue: any) => {
	Vue.component(EasyUpload.name, EasyUpload);
};

export default EasyUpload;
