<script>
/* 
<Block layout="fixed auto" class="tets">
    <BlockItem width="180px">Left</BlockItem>
    <BlockItem>Right</BlockItem>
</Block>

<Block layout="auto fixed">
    <BlockItem>Left</BlockItem>
    <BlockItem width="180px">Right</BlockItem>
</Block>

<Block layout="auto fixed auto">
    <BlockItem>Left</BlockItem>
    <BlockItem width="180px">Middle</BlockItem>
    <BlockItem>Right</BlockItem>
</Block>

<Block layout="fixed auto fixed">
    <BlockItem width="180px">Left</BlockItem>
    <BlockItem>Middle</BlockItem>
    <BlockItem width="180px">Right</BlockItem>
</Block>
*/
export default {

    props: {
        // fixed_auto | auto_fixed | auto_fixed_auto | fixed_auto_fixed
        layout: {
            type: String,
            required: true,
            default: 'fixed_auto'
        },

    },
    // mounted() {},
    // watch: {},
    computed: {
        addClasses() {
            if (typeof this.layout !== 'undefined') {
                switch (this.layout) {
                    case 'fixed_auto':
                        return 'dl_fixed_auto';
                        break;
                    case 'auto_fixed':
                        return 'dl_auto_fixed';
                        break;
                    case 'auto_fixed_auto':
                        return 'dl_auto_fixed_auto';
                        break;
                    case 'fixed_auto_fixed':
                        return 'dl_fixed_auto_fixed';
                        break;

                    default:
                        return 'dl_fixed_auto'
                        break;
                }
            }
            return '';
        }
    },
}
</script>

<template>
<dl :class="addClasses">
    <slot></slot>
</dl>
</template>

<style lang="css" scoped>
/*---  1: fixed-auto  ----*/
dl.dl_fixed_auto {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    margin-top: 0;
    margin-bottom: 0;
}

dl.dl_fixed_auto>dt:nth-child(1) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
}

dl.dl_fixed_auto>dt:nth-child(2) {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
}

/*---  2: layout_auto-fixed  ----------*/

.dl_auto_fixed {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
}

.dl_auto_fixed>dt:nth-child(1) {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
}

.dl_auto_fixed>dt:nth-child(2) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;

}

/*---  3: auto-fixed-auto  -------------------------------------------*/

.dl_auto_fixed_auto {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
}

.dl_auto_fixed_auto>dt:nth-child(1) {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
}

.dl_auto_fixed_auto>dt:nth-child(2) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
}

.dl_auto_fixed_auto>dt:nth-child(3) {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
}

/*---  4: layout_fixed-auto-fixed  -------------------------------------------*/

.dl_fixed_auto_fixed {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
}

.dl_fixed_auto_fixed>dt:nth-child(1) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
}

.dl_fixed_auto_fixed>dt:nth-child(2) {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;

}

.dl_fixed_auto_fixed>dt:nth-child(3) {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
}

dt:nth-child(even) {
    background-color: #eeeeff;
}

dt:nth-child(odd) {
    background-color: #ffeeee;
}
</style>
