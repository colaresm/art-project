<template>
    <v-card outlined rounded="lg" class="pa-7 border">
    <template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
     MODELO ART
     
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
            <v-banner v-if="artModel"
      lines="two"
      icon="mdi-alert"
      color="error"
      class="my-4"
    >
      <v-banner-text >
      Sua situação junto ao CREA não está atualizada
      </v-banner-text>

      <template v-slot:actions>
     
      </template>
    </v-banner>
          <v-select
            dense
            outlined
            v-model="artModel"
           :items="['COD101', 'COD102', 'COD103', 'COD104']"
            label="Selecione o modelo da ART"
             
          ></v-select>
        </v-col>
 
        
    
      </v-row>
    </v-container>
  </v-form>
    
      <v-btn color="primary" @click="e6 = 2">Próxima</v-btn>
    
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">CONTRATANTE/ LOCAL DE SERVIÇO</v-stepper-step>
   
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn flat>Voltar</v-btn>
      <v-btn color="primary" @click="e6 = 3">Continuar</v-btn>
    
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Continuar</v-btn>
      <v-btn flat>Voltar</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
    </v-card>
</template>

<script>
  export default {
    data () {
      
      return {
        artModel:'',
        e6: 1
      }
    }
  }
</script>
<style lang="scss" scoped>
.border {
    border-color: #333 !important;
}

::v-deep .theme--light.v-pagination .v-pagination__item--active {
    color: #333;
}

::v-deep .theme--light.v-pagination .v-pagination__item {
    background-color: #fff !important;
    box-shadow: none !important;
    margin: 0;
}

::v-deep .v-pagination__navigation {
    box-shadow: none !important;
}
</style>