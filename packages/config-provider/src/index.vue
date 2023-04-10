<template>
	<el-config-provider v-bind="{ locale, ...$attrs }">
		<template v-for="(index, name) in $slots" :key="name" #[name]="slotProps">
			<slot :name="name" :index="index" v-bind="slotProps || {}" />
		</template>
	</el-config-provider>
</template>

<script lang="ts" setup name='CkConfigProvider'>
import zhCn from 'element-plus/es/locale/lang/zh-cn'

defineProps({
	locale: {
		default: zhCn
	}
})
</script>