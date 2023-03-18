


Vue.component('my-calendar', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<div class="container col-12 text-center justify-content-center">
        <header class="row col-12">
            
            <navbar class="nav_bar" v-if="isActive" >
              <!-- <div class="background_svg" style="height: 100px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C182.28,130.77 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: red;"></path></svg> 
                 -->
                <ul class="navbare  col-12"  >
                    
                    <li class="show-nav" v-if="logoOn" > <img class="logo rounded-circle" src="../assets/logo/logo.png" alt="logo"></li>
                    <li class="show-nav " :class="{ nameDisplay: namePage == 'portada'}"  > <router-link to="/portada">{{ navData[0].l_1 }}</router-link></li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'bio'}"><router-link to="/bio"> {{ navData[0].l_2 }}</router-link></li>
                    <li class="show-nav" > <a href="#spectacle"> {{ navData[0].l_3 }}</a>
                    <ul class="show-list">
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'kakos'}"><router-link to="/kakos"> Kakofonikas</router-link></li>
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'emperdonadas'}"><router-link to="/emperdonadas">Emperdonadas</router-link></li>
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'bernadette'}"><router-link to="/bernadette">Bernadette</router-link></li>
                      <li class="item-show-list" :class="{ nameDisplay: namePage == 'elvira'}"><router-link to="/elvira">Elvira</router-link></li>
                      <!-- <li class="item-show-list"><router-link to="/creation">Creation</router-link></li> -->
                    </ul>
                    </li>
                    <li class="show-nav"><router-link to="/creation"> {{ navData[0].l_7 }}</router-link></li>
                    <li class="show-nav"><router-link to="/blog"> {{ navData[0].l_4 }}</router-link></li>
                    <li class="show-nav" :class="{ nameDisplay: namePage == 'cal'}"><router-link to="/cal"> {{ navData[0].l_5 }}</router-link></li>
                    <li class="show-nav"><router-link to="/contact" :class="{ nameDisplay: namePage == 'contact'}"> {{ navData[0].l_6 }}</router-link></li>
                    <li class="idiomes">
                        <span class="idioma"  @click="lang('cat')" >Cat</span>
                        <span class="idioma" @click="lang('es')">Es</span>
                        <span class="idioma"  @click="lang('fr')">Fr</span>
                    </li>
                    <li class="svg_icon">
                      <img  v-if="dark" class="svg_icon" @click="$emit('theme',Boolean(false))" src="../assets/design/sun_white.svg">
                    <img v-else class="svg_icon" @click="$emit('theme',Boolean(true))" src="../assets/design/moon_fill_white.svg">
                    </li>
                    
                </ul>
                <!-- <p style="color:white">{{namePage}}</p> -->
          

              <!-- </div> -->
            </navbar>

            <button type="button"  @click="isActive = !isActive" class="btn_nav" :class="{ active: isActive }" >
               <span class="lineN l1" :class="{ active: isActive }"></span>
               <span class="lineN l2" :class="{ active: isActive }"></span>
               <span class="lineN l3" :class="{ active: isActive }"></span>
            </button>
    

        </header>
    </div>'
  })