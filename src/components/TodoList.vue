<template>
  <div>
    <ul>
      <li v-for="item in todos">{{item.title}}</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [
        {
          title: 'Todo A',
          project: 'Project A',
          done: false,
        },
        {
          title: 'Todo B',
          project: 'Project B',
          done: false,
        },
        {
          title: 'Todo C',
          project: 'Project C',
          done: false,
        },
      ],
    };
  },
};
</script>

<style>

</style>

