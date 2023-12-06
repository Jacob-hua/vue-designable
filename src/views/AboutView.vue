<template>
  <div class="about">
    <h1>This is an Form page</h1>
    <FormProvider :form="form">
      <SchemaField :schema="schema"></SchemaField>
      <!-- <FormConsumer></FormConsumer> -->
    </FormProvider>
  </div>
</template>

<script>
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField, FormConsumer } from "@formily/vue";
import jsonSchema from "./schema.json";
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  Collapse,
  ArrayTable,
  ArrayCards,
  Card,
  Slider,
  Rate,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Space,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    FormGrid,
    FormLayout,
    FormTab,
    Collapse,
    ArrayTable,
    ArrayCards,
    Card,
    Slider,
    Rate,
  },
});
export default {
  name: "AboutView",
  components: {
    FormProvider,
    SchemaField,
    FormConsumer,
  },
  data() {
    return {
      form: createForm(),
      schema: null,
    };
  },
  mounted() {
    console.log(jsonSchema);
    this.schema = jsonSchema.schema;
  },
  methods: {},
};
</script>
