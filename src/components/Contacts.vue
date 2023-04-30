<template>
    <section ref="container" 
             class="contacts container js-contacts">
        <header class="header">
            <h2 class="header-title">
                Contact Us
            </h2>
            <p class="header-text">
                Connect with Us: Let's Discuss Your Digital Marketing Needs
            </p>
        </header>

        <div class="wrapper">
            <form action="" class="form" @submit="submitForm" novalidate>
                <div class="radio-row">
                    <label class="radio-label">
                        <input v-model="type" type="radio" name="type" value="hi">
                        <div class="radio-emul"></div>
                        Say Hi
                    </label>
                    <label class="radio-label">
                        <input v-model="type" type="radio" name="type" value="quote">
                        <div class="radio-emul"></div>
                        Get a Quote
                    </label>
                </div>

                <div v-for="input in inputs" 
                     :key="input.name"
                     class="row">
                    <label class="input-label">
                        <span>{{ input.label }}<span v-if="input.required">*</span></span>
                        <component :is="input.element"
                                   :type="input.type" 
                                   :name="input.name" 
                                   :required="input.required"
                                   :placeholder="input.placeholder" 
                                   :class="{error: invalidInputs.includes(input.name)}"
                                   @input="onInputChange"
                                   @focus="onInputFocus"
                                   @blur="checkValidation($event.target)"
                        />
                    </label>
                </div>

                <button class="button"
                        :class="{_disabled: !email || !message}"
                        @mousemove="buttonMove"
                        @mouseleave="buttonLeave">
                    Send Message
                </button>
            </form>
        </div>
        <button class="button mobile"
                :class="{_disabled: !email || !message}">
            Send Message
        </button>
    </section>
</template>

<script>
export default {
    name: 'Contacts',
    props: {
        defaultType: String,
    },
    data() {
        return {
            type: 'hi',
            name: '',
            email: '',
            message: '',
            invalidInputs: [],
            inputs: [
                {
                    element: 'input',
                    name: 'name',
                    type: 'text',
                    required: false,
                    placeholder: 'Name',
                    label: 'Name'
                },
                {
                    element: 'input',
                    name: 'email',
                    type: 'email',
                    required: true,
                    placeholder: 'Email',
                    label: 'Email'
                },
                {
                    element: 'textarea',
                    name: 'message',
                    type: '',
                    required: true,
                    placeholder: 'Message',
                    label: 'Message'
                }
            ],
        };
    },
    watch: {
        defaultType(val) {
            this.type = this.defaultType;
        }
    },
    mounted() {
        this.$emit('set-contacts-container', this.$refs.container);
    },
    methods: {
        buttonMove(e) {
            this.$root.$emit('button-move', e);
        },
        buttonLeave(e) {
            this.$root.$emit('button-leave', e);
        },
        submitForm(e) {
            e.preventDefault();
            this.$root.$emit('open-modal', 'form-success');
        },
        checkValidation(target) {
            if ((!target.checkValidity() || (!target.value && target.required))) {
                this.invalidInputs.push(target.name);
            }
        },
        onInputChange(e) {
            this[e.target.name] = e.target.value;
            this.checkValidation(e.target);
        },
        onInputFocus(e) {
            this.invalidInputs = this.invalidInputs.filter(el => el !== e.target.name);
        }
    }
}
</script>

<style lang="scss" scoped>
.contacts {
    margin-top: 140px;

    @include respond-to(tablet) {
        margin-top: 80px;
    }

    @include respond-to(s_tablet) {
        margin-top: 60px;
    }

    .wrapper {
        margin-top: 80px;
        padding: 60px 100px 80px;
        border-radius: 45px;
        background-color: $grey;
        background-image: url('../images/contacts.svg');
        background-position: 159% center;
        background-repeat: no-repeat;
        background-size: 692px 648px;

        @include respond-to(tablet) {
            margin-top: 52px;
            background-image: none;
        }

        @include respond-to(s_tablet) {
            margin-top: 40px;
            padding: 40px 30px 50px;
        }
    }

    .form {
        width: 556px;

        @include respond-to(tablet) {
            width: 100%;
        }
    }

    .radio-row {
        display: flex;
        align-items: center;

        @include respond-to(s_tablet) {
            margin-bottom: 46px;
        }
    }

    .radio-label {
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 23px;
        cursor: pointer;

        @include respond-to(s_tablet) {
            font-size: 16px;
            line-height: 20px;
        }

        &:first-child {
            margin-right: 35px;

            @include respond-to(s_tablet) {
                margin-right: 60px;
            }
        }

        & input {
            display: none;

            &:checked + .radio-emul {

                &:before {
                    opacity: 1;
                }
            }
        }

        .radio-emul {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            border-radius: 100%;
            border: 1px solid $black;
            margin-right: 14px;
            background-color: #fff;

            &:before {
                content: '';
                display: block;
                width: 16px;
                height: 16px;
                border-radius: 100%;
                background-color: $green;
                opacity: 0;
                transition: opacity .3s ease-in-out;
            }
        }
    }

    .row {
        margin-top: 40px;

        @include respond-to(s_tablet) {
            margin-top: 20px;
        }
    }

    .input-label {

        input,
        textarea {
            display: block;
            margin-top: 5px;
            width: 100%;
            border: 1px solid $black;
            padding: 17px 30px;
            border-radius: 14px;
            font-size: 18px;
            line-height: 23px;
            font-family: inherit;
            color: #000;
            outline: none;
            transition: border-color .3s ease-in-out;

            @include respond-to(s_tablet) {
                margin-top: 10px;
                padding: 17px 19px;
                font-size: 16px;
                line-height: 24px;
            }

            &::placeholder {
                color: #898989;
            }

            &.error {
                border-color: red;
            }
        }

        textarea {
            height: 190px;
            resize: none;

            @include respond-to(s_tablet) {
                height: 132px;
            }
        }
    }

    .button {
        margin-top: 40px;
        width: 100%;

        @include respond-to(s_tablet) {
            display: none;
        }
        
        &.mobile {
            display: none;

            @include respond-to(s_tablet) {
                display: block;
                margin-top: 30px;
            }
        }
    }
}
</style>