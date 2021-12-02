const app = new Vue({
    el: '#root',
    data: {
        contacts: [{
                name: 'Cristiano',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Cristiano ma perchè sei andato via dalla Juve?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ti prego rispondimi',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'EU ESTOY AQUI',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luca',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
                        {
                name: 'Alessio',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai visto che gol ieri Rabiot?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ha segnato con le mani?',
                        status: 'received'
                    }
                ],
            },
                        {
                name: 'Cristina',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai visto ieri la Juventus ha vinto contro il Napoli?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Su FIFA o su Pes?',
                        status: 'received'
                    }
                ],
            },
                        {
                name: 'Giovanni',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ue uagliù arò sta o pallun?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Sta ngopp ò Rion',
                        status: 'received'
                    }
                ],
            },
                        {
                name: 'Ciro',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ma chi sei lasciami sta',
                        status: 'received'
                    }
                ],
            },
        ],

        currentContact: 0,
        textSent: '',
        searchInput: '',
    },
    methods: {
        activeItem: function (i) {
            this.currentContact = i;
        },

        setActiveClass: function (i) {
            if (i == this.currentContact) {
                return 'active';
            } else {
                return '';
            }
        },
        sendMessage: function (i) {
            if (this.textSent !== '') {
                this.contacts[i].messages.push({
                    date: '10/01/2020 15:50:00',
                    message: this.textSent,
                    status: 'sent',
                });
            };
            setTimeout(() => {
                this.answerMessage(i);
                }, 1000);
            this.textSent = '';
        },

        answerMessage: function (i) {
            this.contacts[i].messages.push({
                date: '10/01/2020 15:50:01',
                message: 'Sium',
                status: 'received',
            })
        },
            searchFilter : function(i){
            if (this.contacts[i].name.toLowerCase().includes(this.searchInput.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        },
        lastMessage: function(i) {    
            const last = this.contacts[i].messages.length - 1;
            return this.contacts[i].messages[last].message;
        },

        showMsgMenu: function(current){
            for(i = 0; i < this.contacts[current].messages.length; i++) {
                this.contacts[current].messages[i].showMenu = false;
            }
        },
        msgTrue: function(){
            
        }
    }
});