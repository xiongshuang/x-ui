<template>
    <div class="component component-padding">
        <h1>PickerWeek组件</h1>
        <h3>多选-按年排序</h3>
        <PickerWeek :date="dateDoubleYear" sort="year" :range="true" @change="dateChangeDoubleByYear" />
        <h3>多选-按月排序</h3>
        <PickerWeek :date="dateDoubleMonth" sort="month" :range="true" @change="dateChangeDoubleByMonth" />
        <h3>单选-按年排序</h3>
        <PickerWeek :date="dateSingleYear" sort="year" @change="dateChangeSingleByYear" />
        <h3>单选-按月排序</h3>
        <PickerWeek :date="dateSingleMonth" sort="month" @change="dateChangeSingleByMonth" />
    </div>
</template>

<script>
    export default {
        name: "PickerWeekView",
        data() {
            return {
                // dateSingleYear: '2020.05.18-2020.05.24',
                dateSingleYear: '',
                // dateSingleMonth: '2020.05.18-2020.05.24',
                dateSingleMonth: '',

                // dateDoubleYear: '2020.01.06-2020.02.02',
                // dateDoubleYear: '2020.01.06-2020.02.23',
                dateDoubleYear: '',
                dateDoubleMonth: ''
            }
        },
        methods: {
            dateChangeSingleByYear({thTextSelected, selectedDate}) {
                console.log('year-选择的日期Text::::', thTextSelected);
                console.log('year-选择的日期::::', selectedDate);
                this.dateSingleYear=selectedDate;
            },
            dateChangeSingleByMonth({thTextSelected, selectedDate}) {
                console.log('month-选择的日期Text::::', thTextSelected);
                console.log('month-选择的日期::::', selectedDate);
                this.dateSingleMonth=selectedDate;
            },
            dateChangeDoubleByYear({thTextSelected, selectedDate}) {
                console.log('month-选择的日期Text::::', thTextSelected);
                console.log('选择的日期::::', selectedDate);
                this.dateDoubleYear=selectedDate;
            },
            dateChangeDoubleByMonth({thTextSelected, selectedDate}) {
                console.log('month-选择的日期Text::::', thTextSelected);
                console.log('选择的日期::::', selectedDate);
                this.dateDoubleMonth=selectedDate;
            }
        }
    }
</script>

<style lang="stylus" scoped>

.component-padding
    padding-bottom 200px !important
    width 240px
    h3
        margin-top 12px
        margin-bottom 12px

</style>