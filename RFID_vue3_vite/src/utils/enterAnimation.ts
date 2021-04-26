/*
 * @Descripttion:入场动画hooks
 * @Author: wy
 * @Date: 2021年04月25日
 * @LastEditTime: 2021年04月26日
 */

import { ref, onMounted } from 'vue';

const animateFlag = ref(false);

onMounted(() => {
	animateFlag.value = true;
});
export { animateFlag };
