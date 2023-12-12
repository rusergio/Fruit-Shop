<template>
  <span>
    {{ this.getNumber(this.value) }}
  </span>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    getNumber (n) {
      if (!n) return ' '
      return n > 99 ? '99+' : n
    }
  },
  updated () {
    // console.log(this.getNumber(this.value))
  }
}
</script>

<style scoped>
span {
  background-color: #e9725a;
  border-radius: 50px;
  color: #fff;
  padding: 2px 7px;
  font-size: 0.9rem;
  width: 20px;
}
</style>
