import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Router from "@providers/router";
import Store from "@providers/store";

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from "primevue/toast";
import ProgressSpinner from 'primevue/progressspinner';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import ToastService from 'primevue/toastservice';
import ScrollPanel from 'primevue/scrollpanel';
import TabMenu from 'primevue/tabmenu';
import Timeline from 'primevue/timeline';
import Galleria from 'primevue/galleria';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Image from 'primevue/image';
import FileUpload from 'primevue/fileupload';
import Carousel from "primevue/carousel"
import Dialog from "primevue/dialog"
import Dropdown from "primevue/dropdown"
import ConfirmPopup from "primevue/confirmpopup"
import ConfirmationService from 'primevue/confirmationservice';
import AutoComplete from 'primevue/autocomplete';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tree from 'primevue/tree';
import InputNumber from 'primevue/inputnumber';
import Tooltip from 'primevue/tooltip';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import Skeleton from 'primevue/skeleton';
import ProgressBar from 'primevue/progressbar';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

const app = createApp(App);

app.directive('tooltip', Tooltip);
app.use(Router);
app.use(Store);
app.use(PrimeVue);

app.use(ToastService);
app.use(ConfirmationService);

app.component('Checkbox', Checkbox);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('ProgressSpinner', ProgressSpinner);
app.component('TabPanel', TabPanel);
app.component('TabView', TabView);
app.component('ScrollPanel', ScrollPanel);
app.component('TabMenu', TabMenu);
app.component('Timeline', Timeline);
app.component('Galleria', Galleria);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Image', Image);
app.component('FileUpload', FileUpload);
app.component('Carousel', Carousel)
app.component('Dialog', Dialog)
app.component('Dropdown', Dropdown)
app.component('ConfirmPopup', ConfirmPopup)
app.component('AutoComplete', AutoComplete)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Tree', Tree)
app.component('Textarea', Textarea)
app.component('Paginator', Paginator)
app.component('Card', Card)
app.component('Calendar', Calendar)
app.component('Skeleton', Skeleton)
app.component('ProgressBar', ProgressBar)

app.mount('#app')
