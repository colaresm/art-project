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
        <v-form v-model="valid">
    <v-container>
     
        <v-row
          cols="10"
          md="12"
          align="center"
        >       
          Contrantante*: <v-checkbox></v-checkbox> Pessoa física <v-checkbox></v-checkbox>Pessoa jurídica
        </v-row>

          <div>
  
    <v-text-field label="CPF/CNPJ" outlined dense></v-text-field>
  </div>
   <v-row
          cols="10"
          md="12"
          align="center"
        >       
          Proprietário*: <v-checkbox></v-checkbox> Pessoa física <v-checkbox></v-checkbox>Pessoa jurídica
        </v-row>
       
  <div>
   
    <v-text-field label="CPF/CNPJ" outlined dense></v-text-field>
  </div>
      
        
        <v-text-field v-model="typecontact" label="N° de contrato*" outlined dense></v-text-field>
        <v-text-field label="Código de obra pública*" outlined dense></v-text-field>
          <v-text-field label="Celebrado em*" outlined dense></v-text-field>
          <v-text-field label="Previsão de Términio*" outlined dense></v-text-field>
          <v-text-field label="Valor da Obra/Serviço*" outlined dense></v-text-field>
     <v-row
          cols="10"
          md="12"
          align="center"
        >       
          Preencher endereço*: <v-checkbox v-model="isAddress"></v-checkbox>Utilizar Endereço do contratante <v-checkbox></v-checkbox>Utilizar Endereço do proprietário
          <v-checkbox></v-checkbox>Utilizar outro endereço
        </v-row>
   <v-col v-if="isAddress">

    <v-text-field v-model="address.CEP" label="CEP*" outlined dense></v-text-field>
        <v-text-field   v-model="address.type" label="Tipo*" outlined dense></v-text-field>
         <v-text-field   v-model="address.uf"  label="UF" outlined dense></v-text-field>
          <v-text-field  v-model="address.city"  label="Cidade*" outlined dense></v-text-field>
          <v-text-field  v-model="address.neigh"  label="Bairro*" outlined dense></v-text-field>
        
            <v-text-field  v-model="address.phone"  label="Telefone*" outlined dense></v-text-field>

            <v-col  cols="10"
          md="12"
          align="left">Tipo de coordenada:   <v-text-field label="Longitude*" outlined dense></v-text-field> <v-text-field label="Latitude*" outlined dense></v-text-field> </v-col>
    
   </v-col>
        
       </v-container>
 
   
  </v-form>
    
      <v-btn flat>Voltar</v-btn>
      <v-btn color="primary" @click="e6 = 3">Continuar</v-btn>
    
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">FINALIDADE</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Continuar</v-btn>
      <v-btn flat>Voltar</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">PARTICIPAÇÃO</v-stepper-step>
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
        isAddress:false,
        address:{
            CEP:'60330-310',
             type:'Residência',
             number:'561',
             complement:'nha',
             street:'Rua  A',
             neigh:'Fátima',
             phone:'(85) 99260-5068',
             uf:'CE',
             city:'Fortaleza'
        },
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
