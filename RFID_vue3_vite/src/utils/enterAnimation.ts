/*
 * @Descripttion:入场动画hooks
 * @Author: wy
 * @Date: 2021年04月25日
 * @LastEditTime: 2021年04月25日
 */

import { ref, onMounted } from 'vue';

const animateFlag = ref(false);
const enterAnimation = () => {
	onMounted(() => {
		animateFlag.value = true;
	});
};
export { animateFlag, enterAnimation };
