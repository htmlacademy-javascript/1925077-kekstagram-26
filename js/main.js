import {getDescriptionsOfPhoto} from './get-descriptions-of-photo.js';
import {checkLengthText, TEXT as TEXT_FOR_CHECK_LENGTH} from './check-length-text.js';

checkLengthText(TEXT_FOR_CHECK_LENGTH, 140);

getDescriptionsOfPhoto();
