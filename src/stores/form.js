import { defineStore } from 'pinia'

export const useForm = defineStore({
  id: 'form',
  state: () => ({
    loading: false,
    form: {
      username: '',
      usernameErr: '',
      email: '',
      emailErr: '',
      message: '',
      content: '',
      contentErr: '',
    },
  }),
  actions: {
    validation() {
      if (this.form.username === '') {
        this.form.usernameErr = 'نام کاربری خود را وارد کنید!'
      } else {
        this.form.usernameErr = ''
      }
      if (this.form.email === '') {
        this.form.emailErr = 'ایمیل خود را وارد کنید!'
      } else {
        this.form.emailErr = ''
      }
      if (this.form.content === '') {
        this.form.contentErr = 'عنوان خود را بگذارید!'
      } else {
        this.form.contentErr = ''
      }

      if (this.form.username !== '' && this.form.email !== '' && this.form.content !== '') {
        this.loading = true

        setTimeout(() => {
          this.form.username = ''
          this.form.email = ''
          this.form.message = ''
          this.form.content = ''
          this.loading = false
        }, 2000);
      }
    }
  }
})