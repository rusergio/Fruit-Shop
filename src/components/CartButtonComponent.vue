<template>
  <div :style="styles" class="btn">
    <button :disabled="total === 0" class="op left" @click="add(-1)">-</button>
    <span class="qty">{{ total }}</span>
    <button class="op right" @click="add(1)">+</button>
  </div>
</template>

<script>
export default {
  props: ['styles', 'cantidad', 'enCarro'],
  data () {
    return {
      total: 1
    }
  },
  methods: {
    add (x) {
      this.total += x
      this.$emit('take', this.total)
    }
  },
  mounted () {
    if (this.enCarro) {
      this.total = this.cantidad
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  background-color: #fff;
  font-size: 1rem;
}
.left {
  border-right: 2px solid #777;
  padding-right: 10px;
}

.right {
  border-left: 2px solid #777;
  padding-left: 10px;
}

.btn {
  padding: 5px 10px;
  border: thin solid #999;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.qty {
  margin: 0 10px;
}

.op {
  color: orange;
  font-size: 1.5rem;
}
</style>
