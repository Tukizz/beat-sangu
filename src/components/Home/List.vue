<template>
  <section class="container">
    <div class="button-group">
      <button
        :v-for="(val, key) in option.getFilterData"
        class="button"
        :class="[key === sortOption ? 'is-checked' : '']"
        @click="filter(key)"
      >
        {{ key }}
      </button>
    </div>

    <isotope
      :item-selector="'element-item'"
      :options="option"
      :list="list"
      @filter="filterOption = arguments[0]"
      @sort="sortOption = arguments[0]"
    >
      <div
        v-for="element in list"
        :key="element.id"
        :class="[element.category]"
      >
        {{ element.name }}
      </div>
    </isotope>
  </section>
</template>

<script>
import isotope from "vueisotope";

export default {
  components: {
    isotope
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "book",
          category: "angry"
        },
        {
          id: 2,
          name: "book",
          category: "heart"
        },
        {
          id: 3,
          name: "book",
          category: "love"
        }
      ],
      currentLayout: "masonry",
      selected: null,
      sortOption: "original-order",
      filterOption: "show all",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          "show all"() {
            return true;
          },
          metal: el => {
            return !!el.metal;
          },
          transition(el) {
            return el.category === "transition";
          },
          "alkali and alkaline-earth"(el) {
            return el.category === "alkali" || el.category === "alkaline-earth";
          },
          "not transition"(el) {
            return el.category !== "transition";
          },
          "metal but not transition"(el) {
            return !!el.metal && el.category !== "transition";
          },
          "number > 50"(el) {
            return el.number > 50;
          },
          "name ends with ium"(el) {
            return el.name.match(/ium$/);
          }
        },
        getSortData: {
          name: "name",
          category: "category"
        }
      }
    };
  },
  methods: {
    sort(key) {
      this.$refs.cpt.sort(key);
    },
    filter(key) {
      this.$refs.cpt.filter(key);
    },
    changeLayout(key) {
      this.$refs.cpt.layout(key);
    }
  }
};
</script>
