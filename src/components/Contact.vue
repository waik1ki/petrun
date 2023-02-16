<template>
	<interaction-area :categoryId="'contact'">
		<div class="py-12" style="width: 100%; background-color: #f5f6f8">
			<responsive-section>
				<div
					:class="this.$vuetify.breakpoint.mdAndDown ? 'text-center px-7' : ''"
					style="position: relative"
				>
					<v-img
						src="@/assets/loading.gif"
						width="130"
						height="130"
						class="loading"
						v-if="loadingState"
					></v-img>
					<p class="sectionCategoryTitle">Contact</p>
					<p class="sectionTitle mb-5">문의 사항이 있으면 연락주세요.</p>
					<form ref="form" @submit.prevent="sendEmail">
						<div
							class="v-input theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed mb-2"
						>
							<div class="v-input__control">
								<div class="v-input__slot">
									<div class="v-text-field__slot">
										<input
											placeholder="이메일을 입력해주세요."
											type="email"
											name="email"
											v-model="emailValidate"
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="v-input v-textarea v-textarea--no-resize theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed mb-3"
						>
							<div class="v-input__control">
								<div class="v-input__slot" style="height: 250px">
									<div class="v-text-field__slot">
										<textarea
											placeholder="내용을 입력해주세요."
											name="message"
											rows="5"
											v-model="messageValidate"
										></textarea>
									</div>
								</div>
							</div>
						</div>
						<div class="d-flex justify-center">
							<input
								class="submitBtn"
								type="submit"
								value="문의하기"
								style="color: white"
							/>
						</div>
					</form>
					<div style="display: none">
						<v-text-field label="이메일을 입력해주세요." solo></v-text-field>
						<v-textarea label="내용을 입력해주세요."></v-textarea>
					</div>
				</div>
			</responsive-section>
		</div>
	</interaction-area>
</template>

<script>
import InteractionArea from './InteractionArea.vue';
import ResponsiveSection from './ResponsiveSection.vue';
// import emailjs from '@emailjs/browser';
export default {
	components: { InteractionArea, ResponsiveSection },
	data() {
		return {
			emailValidate: '',
			messageValidate: '',
			loadingState: false,
		};
	},
	methods: {
		clearForm() {
			this.$refs.form.reset();
			this.emailValidate = '';
			this.messageValidate = '';
		},
		sleep(ms) {
			return new Promise(r => setTimeout(r, ms));
		},
		sendEmail() {
			if (this.emailValidate === '') {
				alert('이메일을 입력해주세요.');
			} else if (this.messageValidate === '') {
				alert('내용을 입력해주세요.');
			} else {
				this.loadingState = true;
				this.sleep(1500).then(() => {
					this.clearForm();
					this.loadingState = false;
				});
				// }, 1500);

				// clearTimeout(myTimer);
				// emailjs
				// 	.sendForm(
				// 		'service_fmgnzcx',
				// 		'template_q2xlxnt',
				// 		this.$refs.form,
				// 		'tSnhyt3YagGh5SqNo',
				// 	)
				// 	.then(
				// 		result => {
				// 			console.log('SUCCESS!', result.text);
				// 			this.clearForm();
				// 			this.loadingState = false;
				// 		},
				// 		error => {
				// 			console.log('FAILED...', error.text);
				// 			this.clearForm();
				// 			this.loadingState = false;
				// 		},
				// 	);
			}
		},
	},
};
</script>
