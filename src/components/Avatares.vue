<template>
<div class="conteudoAvatar">
  {{avatares[0]}}
  <div class="avatar">
    <div class="item" v-for="avatar in avatares" @click="selectAvatar(avatar)" :key="avatar">
      <img :src="avatar" fluid-grow alt="">
    </div>
  </div>
  <b-button variant="warning" class="sm" @click="cancela">Cancelar</b-button>
</div>
</template>

<script>
import clown from '../assets/Avatars/001-clown.png'
import devil from   '../assets/Avatars/002-devil.png'
import devil1 from   '../assets/Avatars/003-devil-1.png'
import nun from '../assets/Avatars/004-nun.png'
import zombie from '../assets/Avatars/005-zombie.png'
import werewolf from '../assets/Avatars/006-werewolf.png'
import jester from '../assets/Avatars/007-jester.png'
import monster from '../assets/Avatars/008-monster.png'
import pumpkin from '../assets/Avatars/009-pumpkin.png'
import reaper from '../assets/Avatars/010-reaper.png'
import littleredridinghood from '../assets/Avatars/011-little-red-riding-hood.png'
import wizard from '../assets/Avatars/012-wizard.png'
import monster1 from '../assets/Avatars/013-monster-1.png'
import marshmallow from '../assets/Avatars/014-marshmallow.png'
import cake from '../assets/Avatars/015-cake.png'
import candle from '../assets/Avatars/016-candle.png'
import basket from '../assets/Avatars/017-basket.png'
import candy from '../assets/Avatars/018-candy.png'
import brideoffrankenstein from '../assets/Avatars/019-bride-of-frankenstein.png'
import hockey from '../assets/Avatars/020-hockey.png'
import hand from '../assets/Avatars/021-hand.png'
import finger from '../assets/Avatars/022-finger.png'
import vampire from '../assets/Avatars/023-vampire.png'
import witch from '../assets/Avatars/024-witch.png'
import nurse from '../assets/Avatars/025-nurse.png'
import bunny from '../assets/Avatars/026-bunny.png'
import unicorn from '../assets/Avatars/027-unicorn.png'
import eyeball from '../assets/Avatars/028-eyeball.png'
import potion from '../assets/Avatars/029-potion.png'
import spider from '../assets/Avatars/030-spider.png'
import candy1 from '../assets/Avatars/031-candy-1.png'
import drink from '../assets/Avatars/032-drink.png'
import lollipop from '../assets/Avatars/033-lollipop.png'
import frankenstein from '../assets/Avatars/034-frankenstein.png'
import invitation from '../assets/Avatars/035-invitation.png'
import bat from '../assets/Avatars/036-bat.png'
import bunting from '../assets/Avatars/037-bunting.png'
import gift from '../assets/Avatars/038-gift.png'
import balloon from '../assets/Avatars/039-balloon.png'
import axe from '../assets/Avatars/040-axe.png'
import coffin from '../assets/Avatars/041-coffin.png'
import gravestone from '../assets/Avatars/042-gravestone.png'
import knife from '../assets/Avatars/043-knife.png'
import pitchfork from '../assets/Avatars/044-pitchfork.png'
import mummy from '../assets/Avatars/045-mummy.png'
import devil2 from '../assets/Avatars/046-devil-2.png'
import magician from '../assets/Avatars/047-magician.png'
import pirate from '../assets/Avatars/048-pirate.png'
import ghost from '../assets/Avatars/049-ghost.png'
import scarecrow from '../assets/Avatars/050-scarecrow.png'
export default {
  data:function(){
    return {
      avatares:[  
        clown,
        devil,
        devil1,
        nun,
        zombie,
        werewolf,
        jester,
        monster,
        pumpkin,
        reaper,
        littleredridinghood,
        wizard,
        monster1,
        marshmallow,
        cake,
        candle,
        basket,
        candy,
        brideoffrankenstein,
        hockey,
        hand,
        finger,
        vampire,
        witch,
        nurse,
        bunny,
        unicorn,
        eyeball,
        potion,
        spider,
        candy1,
        drink,
        lollipop,
        frankenstein,
        invitation,
        bat,
        bunting,
        gift,
        balloon,
        axe,
        coffin,
        gravestone,
        knife,
        pitchfork,
        mummy,
        devil2,
        magician,
        pirate,
        ghost,
        scarecrow
      ]
    }
  },
    methods:{
      selectAvatar(avatar){
        this.$emit('novoAvatar',avatar)
      },
      cancela(){
        this.$emit('cancela')
      }
    },
    mounted() {
      
    }
}
</script>

<style>
  .conteudoAvatar{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .avatar{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    overflow: auto;
    align-items: center;
    height: 65vh;
    background-color: #004d40;
    margin-bottom: 10px; 
  }
  .item{
    margin: 10px;
  }
  .item img{
    width:50px;
    height: 50px;;
  }
  @media (min-width: 900px) {
    .item img{
      width:80px;
      height: 80px;;
    }
  }
  @media (min-width: 1200px) {
    .item img{
      width:100px;
      height: 100px;;
    }
  }

</style>
