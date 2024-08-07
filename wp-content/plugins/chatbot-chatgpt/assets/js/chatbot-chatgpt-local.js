jQuery(document).ready(function ($) {
    
    function chatbot_chatgpt_localize() {
   
        // DIAG - Diagnostics - Ver 1.8.5
        // console.log('Chatbot: NOTICE: chatbot-chatgpt-local.js - ENTERING');

        // Access the variables passed from PHP using the chatbotSettings object - Ver 1.4.1
        let chatbotChatgptBotNameInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_bot_name) ? chatbotSettings.chatbot_chatgpt_bot_name : 'Kognetiks Chatbot';
        let chatbotChatgptBotPromptInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_bot_prompt) ? chatbotSettings.chatbot_chatgpt_bot_prompt : 'Enter your question ...';

        let chatgptInitialGreetingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.initial_greeting) ? chatbotSettings.initial_greeting : 'Hello! How can I help you today?';
        let chatgptSubsequentGreetingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_subsequent_greeting) ? chatbotSettings.chatbot_chatgpt_subsequent_greeting : 'Hello again! How can I help you?';

        let chatbotChatgptDisplayStyleInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_display_style) ? chatbotSettings.chatbot_chatgpt_display_style : 'floating';
        let chatbotChatgptAssistantAliasInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_assistant_alias) ? chatbotSettings.chatbot_chatgpt_assistant_alias : 'primary';

        let chatgptStartStatusInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbotStartStatus) ? chatbotSettings.chatbotStartStatus : 'closed';
        let chatbotChatgptAudienceChoiceInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_audience_choice) ? chatbotSettings.chatbot_chatgpt_audience_choice : 'all';
        let chatbotChatgptStartStatusNewVisitorInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_start_status_new_visitor) ? chatbotSettings.chatbot_chatgpt_start_status_new_visitor : 'closed';

        let chatgptDisclaimerSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_disclaimer_setting) ? chatbotSettings.chatbot_chatgpt_disclaimer_setting : 'Yes';
        let chatgptWidthSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_width_setting) ? chatbotSettings.chatbot_chatgpt_width_setting : 'Narrow';
        let chatgptDiagnosticsSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatgpt_diagnotics) ? chatbotSettings.chatbot_chatgpt_diagnostics : 'Off';
        let chatgptCustomErrorMessageInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_error_message) ? chatbotSettings.chatbot_chatgpt_custom_error_message : 'Your custom error message goes here.';

        // Avatar Setting - Ver 1.5.0
        let chatgptAvatarIconSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_avatar_icon_setting) ? chatbotSettings.chatbot_chatgpt_avatar_icon_setting : 'icon-001.png';
        let chatgptAvatarIconURLSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_avatar_icon_url_setting) ? chatbotSettings.chatbot_chatgpt_avatar_icon_url_setting : '';
        let chatgptCustomAvatarIconSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_avatar_icon_setting) ? chatbotSettings.chatbot_chatgpt_custom_avatar_icon_setting : '';
        let chatgptAvatarGreetingSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_avatar_greeting_setting) ? chatbotSettings.chatbot_chatgpt_avatar_greeting_setting : 'Great to see you today! How can I help you?';

        let chatgptEnableCustomButtonsInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_enable_custom_buttons) ? chatbotSettings.chatbot_chatgpt_enable_custom_buttons : 'Off';
        let chatgptCustomButtonName1Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_name_1) ? chatbotSettings.chatbot_chatgpt_custom_button_name_1 : '';
        let chatgptCustomButtonURL1Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_url_1) ? chatbotSettings.chatbot_chatgpt_custom_button_url_1 : '';
        let chatgptCustomButtonName2Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_name_2) ? chatbotSettings.chatbot_chatgpt_custom_button_name_2 : '';
        let chatgptCustomButtonURL2Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_url_2) ? chatbotSettings.chatbot_chatgpt_custom_button_url_2 : '';
        let chatgptCustomButtonName3Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_name_3) ? chatbotSettings.chatbot_chatgpt_custom_button_name_3 : '';
        let chatgptCustomButtonURL3Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_url_3) ? chatbotSettings.chatbot_chatgpt_custom_button_url_3 : '';
        let chatgptCustomButtonName4Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_name_4) ? chatbotSettings.chatbot_chatgpt_custom_button_name_4 : '';
        let chatgptCustomButtonURL4Input = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_custom_button_url_4) ? chatbotSettings.chatbot_chatgpt_custom_button_url_4 : '';

        // Allow file uploads - Ver 1.7.6
        let chatgptAllowFileUploadsInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_allow_file_uploads) ? chatbotSettings.chatbot_chatgpt_allow_file_uploads : 'No';

        // Timeout Setting - Ver 1.8.8
        let chatgptTimeoutSettingInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_timeout_setting) ? chatbotSettings.chatbot_chatgpt_timeout_setting : '240';

        // Voice Option - Ver 1.9.5
        let chatgptVoiceOptionInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_voice_option) ? chatbotSettings.chatbot_chatgpt_voice_option : 'Off';

        // Audio Output Option - Ver 1.9.5
        let chatgptAudioOutputOptionInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_audio_output_option) ? chatbotSettings.chatbot_chatgpt_audio_output_option : 'Off';

        // Force Page Reload on Conversation Cleared - Ver 2.0.4
        let chatgptForcePageReloadInput = (typeof chatbotSettings !== 'undefined' && chatbotSettings.chatbot_chatgpt_force_page_reload) ? chatbotSettings.chatbot_chatgpt_force_page_reload : 'No';
    
        // DIAG - Diagnostics - Ver 2.0.5
        // console.log('Chatbot: NOTICE: chatbot-chatgpt-local.js - Before localStorage.set Item loop');

        Object.keys(chatbotSettings).forEach((key) => {

            // Skip the display style setting - Ver 2.0.4
            if (key !== 'chatbot_chatgpt_display_style') {
                localStorage.setItem(key, chatbotSettings[key]);
            }
            
            // DIAG - Diagnostics - Ver 1.8.5
            // console.log('Chatbot: NOTICE: chatbot-chatgpt-local.js - Key: ' + key + ' Value: ' + chatbotSettings[key]);

        });

        // DIAG - Diagnostics - Ver 2.0.5
        // console.log('Chatbot: NOTICE: chatbot-chatgpt-local.js - After localStorage.set Item loop');

        // Get the input elements
        chatbotChatgptBotNameInput = document.getElementById('chatbot_chatgpt_bot_name');
        chatbotChatgptBotPromptInput = document.getElementById('chatbot_chatgpt_bot_prompt');

        chatgptInitialGreetingInput = document.getElementById('chatbot_chatgpt_initial_greeting');
        chatgptSubsequentGreetingInput = document.getElementById('chatbot_chatgpt_subsequent_greeting');

        // chatbotChatgptDisplayStyleInput = document.getElementById('chatbot_chatgpt_display_style');
        chatbotChatgptAssistantAliasInput = document.getElementById('chatbot_chatgpt_assistant_alias');

        chatgptStartStatusInput = document.getElementById('chatbot_chatgpt_start_status');
        chatbotChatgptStartStatusNewVisitorInput = document.getElementById('chatbot_chatgpt_start_status_new_visitor');

        chatgptDisclaimerSettingInput = document.getElementById('chatbot_chatgpt_disclaimer_setting');
        chatbotChatgptAudienceChoiceInput = document.getElementById('chatbot_chatgpt_audience_choice');
        chatgptWidthSettingInput = document.getElementById('chatbot_chatgpt_width_setting');
        chatgptDiagnosticsSettingInput = document.getElementById('chatbot_chatgpt_diagnostics');
        chatgptCustomErrorMessageInput = document.getElementById('chatbot_chatgpt_custom_error_message');

        // Avatar Setting - Ver 1.5.0
        chatgptAvatarIconSettingInput = document.getElementById('chatbot_chatgpt_avatar_icon_setting');
        chatgptAvatarIconURLSettingInput = document.getElementById('chatbot_chatgpt_avatar_icon_url_setting');
        chatgptCustomAvatarIconSettingInput = document.getElementById('chatbot_chatgpt_custom_avatar_icon_setting');
        chatgptAvatarGreetingSettingInput = document.getElementById('chatbot_chatgpt_avatar_greeting_setting');

        chatgptEnableCustomButtonsInput = document.getElementById('chatbot_chatgpt_enable_custom_buttons');
        chatgptCustomButtonName1Input = document.getElementById('chatbot_chatgpt_custom_button_name_1');
        chatgptCustomButtonURL1Input = document.getElementById('chatbot_chatgpt_custom_button_url_1');
        chatgptCustomButtonName2Input = document.getElementById('chatbot_chatgpt_custom_button_name_2');
        chatgptCustomButtonURL2Input = document.getElementById('chatbot_chatgpt_custom_button_url_2');
        chatgptCustomButtonName3Input = document.getElementById('chatbot_chatgpt_custom_button_name_3');
        chatgptCustomButtonURL3Input = document.getElementById('chatbot_chatgpt_custom_button_url_3');
        chatgptCustomButtonName4Input = document.getElementById('chatbot_chatgpt_custom_button_name_4');
        chatgptCustomButtonURL4Input = document.getElementById('chatbot_chatgpt_custom_button_url_4');

        // Allow file uploads - Ver 1.7.6
        chatgptAllowFileUploadsInput = document.getElementById('chatbot_chatgpt_allow_file_uploads');

        // Timeout Setting - Ver 1.8.8
        chatgptTimeoutSettingInput = document.getElementById('chatbot_chatgpt_timeout_setting');

        // Voice Option - Ver 1.9.5
        chatgptVoiceOptionInput = document.getElementById('chatbot_chatgpt_voice_option');

        // Audio Output Option - Ver 1.9.5
        chatgptAudioOutputOptionInput = document.getElementById('chatbot_chatgpt_audio_output_option');

        // Force Page Reload on Conversation Cleared - Ver 2.0.4
        chatgptForcePageReloadInput = document.getElementById('chatbot_chatgpt_force_page_reload');

        if(chatbotChatgptBotNameInput) {
            chatbotChatgptBotNameInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_bot_name', this.value);
            });
        }

        if(chatbotChatgptBotPromptInput) {
            chatbotChatgptBotPromptInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_bot_prompt', this.value);
            });
        }

        if(chatgptInitialGreetingInput) {
            chatgptInitialGreetingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_initial_greeting', this.value);
            });
        }

        if(chatgptSubsequentGreetingInput) {
            chatgptSubsequentGreetingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_subsequent_greeting', this.value);
            });
        }
        
        if(chatgptStartStatusInput) {
            chatgptStartStatusInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_start_status', this.options[this.selectedIndex].value);
            });
        }

        if(chatbotChatgptStartStatusNewVisitorInput) {
            chatbotChatgptStartStatusNewVisitorInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_start_status_new_visitor', this.options[this.selectedIndex].value);
            });
        }

        if(chatgptDisclaimerSettingInput) {
            chatgptDisclaimerSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_disclaimer_setting', this.options[this.selectedIndex].value);
            });
        }

        if(chatbotChatgptAudienceChoiceInput) {
            chatbotChatgptAudienceChoiceInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_audience_choice', this.options[this.selectedIndex].value);
            });
        }

        if(chatgptWidthSettingInput) {
            chatgptWidthSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_width_setting', this.options[this.selectedIndex].value);
            });
        }

        if(chatgptDiagnosticsSettingInput) {
            chatgptDiagnosticsSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_diagnostics', this.options[this.selectedIndex].value);
            });
        }

        if(chatgptCustomErrorMessageInput) {
            chatgptCustomErrorMessageInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_error_message', this.value);
            });
        }

        if(chatgptEnableCustomButtonsInput) {
            chatgptEnableCustomButtonsInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_enable_custom_buttons', this.options[this.selectedIndex].value);
            });
        }
        
        if(chatgptCustomButtonName1Input) {
            chatgptCustomButtonName1Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_1', this.value);
            });
        }

        if(chatgptCustomButtonURL1Input) {
            chatgptCustomButtonURL1Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_1', this.value);
            });
        }

        if(chatgptCustomButtonName2Input) {
            chatgptCustomButtonName2Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_2', this.value);
            });
        }

        if(chatgptCustomButtonURL2Input) {
            chatgptCustomButtonURL2Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_2', this.value);
            });
        }

        if(chatgptCustomButtonName3Input) {
            chatgptCustomButtonName3Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_3', this.value);
            });
        }

        if(chatgptCustomButtonURL3Input) {
            chatgptCustomButtonURL3Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_3', this.value);
            });
        }

        if(chatgptCustomButtonName4Input) {
            chatgptCustomButtonName4Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_4', this.value);
            });
        }

        if(chatgptCustomButtonURL4Input) {
            chatgptCustomButtonURL4Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_4', this.value);
            });
        }
        
        // Avatar Settings - Ver 1.5.0
        if(chatgptAvatarIconSettingInput) {
            chatgptAvatarIconSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_avatar_icon_setting', this.value);
            });
        }

        if(chatgptCustomAvatarIconSettingInput) {
            chatgptCustomAvatarIconSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_avatar_icon_setting', this.value);
            });
        }

        if(chatgptAvatarIconURLSettingInput) {
            chatgptAvatarIconURLSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_avatar_icon_url_setting', this.value);
            });
        }
        
        if(chatgptAvatarGreetingSettingInput) {
            chatgptAvatarGreetingSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_avatar_greeting_setting', this.value);
            });
        }

        if(chatgptEnableCustomButtonsInput) {
            chatgptEnableCustomButtonsInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_enable_custom_buttons', this.value);
            });
        }

        if(chatgptCustomButtonName1Input) {
            chatgptCustomButtonName1Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_1', this.value);
            });
        }

        if(chatgptCustomButtonURL1Input) {
            chatgptCustomButtonURL1Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_1', this.value);
            });
        }

        if(chatgptCustomButtonName2Input) {
            chatgptCustomButtonName2Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_2', this.value);
            });
        }

        if(chatgptCustomButtonURL2Input) {
            chatgptCustomButtonURL2Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_2', this.value);
            });
        }

        if(chatgptCustomButtonName3Input) {
            chatgptCustomButtonName3Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_name_3', this.value);
            });
        }

        if(chatgptCustomButtonURL3Input) {
            chatgptCustomButtonURL3Input.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_custom_button_url_3', this.value);
            });
        }

        // Allow file uploads - Ver 1.7.6
        if(chatgptAllowFileUploadsInput) {
            chatgptAllowFileUploadsInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_allow_file_uploads', this.value);
            });
        }

        // Timeout Setting - Ver 1.8.8
        if(chatgptTimeoutSettingInput) {
            chatgptTimeoutSettingInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_timeout_setting', this.value);
            });
        }

        // Voice Option - Ver 1.9.5
        if(chatgptVoiceOptionInput) {
            chatgptVoiceOptionInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_voice_option', this.value);
            });
        }

        // Audio Output Option - Ver 1.9.5
        if(chatgptAudioOutputOptionInput) {
            chatgptAudioOutputOptionInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_audio_output_option', this.value);
            });
        }

        // Force Page Reload on Conversation Cleared - Ver 2.0.4
        if(chatgptForcePageReloadInput) {
            chatgptForcePageReloadInput.addEventListener('change', function() {
                localStorage.setItem('chatbot_chatgpt_force_page_reload', this.value);
            });
        }

        // Update the localStorage values when the form is submitted - Ver 1.4.1
        // chatgpt-settings-form vs. your-form-id
        let chatgptSettingsForm = document.getElementById('chatgpt-settings-form');

        if (chatgptSettingsForm) {
            chatgptSettingsForm.addEventListener('submit', function(event) {

                event.preventDefault(); // Prevent form submission

                // Changed const to var - Ver 1.5.0
                let chatbotChatgptBotNameInput = document.getElementById('chatbot_chatgpt_bot_name');
                let chatbotChatgptBotPromptInput = document.getElementById('chatbot_chatgpt_bot_prompt');

                let chatgptInitialGreetingInput = document.getElementById('chatbot_chatgpt_initial_greeting');
                let chatgptSubsequentGreetingInput = document.getElementById('chatbot_chatgpt_subsequent_greeting');

                let chatgptStartStatusInput = document.getElementById('chatbot_chatgpt_start_status');
                let chatbotChatgptStartStatusNewVisitorInput = document.getElementById('chatbot_chatgpt_start_status_new_visitor');

                // let chatbotChatgptDisplayStyleInput = document.getElementById('chatbot_chatgpt_display_style');
                let chatbotChatgptAssistantAliasInput = document.getElementById('chatbot_chatgpt_assistant_alias');

                let chatgptDisclaimerSettingInput = document.getElementById('chatbot_chatgpt_disclaimer_setting');
                let chatbotChatgptAudienceChoiceInput = document.getElementById('chatbot_chatgpt_audience_choice');
                let chatgptWidthSettingInput = document.getElementById('chatbot_chatgpt_width_setting');
                let chatgptDiagnosticsSettingInput = document.getElementById('chatbot_chatgpt_diagnostics');
                let chatgptCustomErrorMessageInput = document.getElementById('chatbot_chatgpt_custom_error_message');

                // Avatar Settings - Ver 1.5.0
                let chatgptAvatarIconSettingInput = document.getElementById('chatbot_chatgpt_avatar_icon_setting');
                let chatgptCustomAvatarIconSettingInput = document.getElementById('chatbot_chatgpt_custom_avatar_icon_setting');
                let chatgptAvatarIconURLSettingInput = document.getElementById('chatbot_chatgpt_avatar_icon_url_setting');
                let chatgptAvatarGreetingSettingInput = document.getElementById('chatbot_chatgpt_avatar_greeting_setting');

                // Custom Buttons - Ver 1.6.5
                let chatgptEnableCustomButtonsInput = document.getElementById('chatbot_chatgpt_enable_custom_buttons');
                let chatgptCustomButtonName1Input = document.getElementById('chatbot_chatgpt_custom_button_name_1');
                let chatgptCustomButtonURL1Input = document.getElementById('chatbot_chatgpt_custom_button_url_1');
                let chatgptCustomButtonName2Input = document.getElementById('chatbot_chatgpt_custom_button_name_2');
                let chatgptCustomButtonURL2Input = document.getElementById('chatbot_chatgpt_custom_button_url_2');
                let chatgptCustomButtonName3Input = document.getElementById('chatbot_chatgpt_custom_button_name_3');
                let chatgptCustomButtonURL3Input = document.getElementById('chatbot_chatgpt_custom_button_url_3');
                let chatgptCustomButtonName4Input = document.getElementById('chatbot_chatgpt_custom_button_name_4');
                let chatgptCustomButtonURL4Input = document.getElementById('chatbot_chatgpt_custom_button_url_4');

                // Allow file uploads - Ver 1.7.6
                let chatgptAllowFileUploadsInput = document.getElementById('chatbot_chatgpt_allow_file_uploads');

                // Timeout Setting - Ver 1.8.8
                let chatgptTimeoutSettingInput = document.getElementById('chatbot_chatgpt_timeout_setting');

                // Voice Option - Ver 1.9.5
                let chatgptVoiceOptionInput = document.getElementById('chatbot_chatgpt_voice_option');

                // Audio Output Option - Ver 1.9.5
                let chatgptAudioOutputOptionInput = document.getElementById('chatbot_chatgpt_audio_output_option');

                // Force Page Reload on Conversation Cleared - Ver 2.0.4
                let chatgptForcePageReloadInput = document.getElementById('chatbot_chatgpt_force_page_reload');

                if(chatbotChatgptBotNameInput) {
                    localStorage.setItem('chatbot_chatgpt_bot_name', chatbotChatgptBotNameInput.value);
                }

                if(chatbotChatgptBotPromptInput) {
                    localStorage.setItem('chatbot_chatgpt_bot_prompt', chatbotChatgptBotPromptInput.value);
                }

                if(chatgptInitialGreetingInput) {
                    localStorage.setItem('chatbot_chatgpt_initial_greeting', chatgptInitialGreetingInput.value);
                }

                if(chatgptSubsequentGreetingInput) {
                    localStorage.setItem('chatbot_chatgpt_subsequent_greeting', chatgptSubsequentGreetingInput.value);
                }

                if(chatgptStartStatusInput) {
                    localStorage.setItem('chatbot_chatgpt_start_status', chatgptStartStatusInput.value);
                }

                if(chatbotChatgptStartStatusNewVisitorInput) {
                    localStorage.setItem('chatbot_chatgpt_start_status_new_visitor', chatbotChatgptStartStatusNewVisitorInput.value);
                }

                if(chatgptDisclaimerSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_disclaimer_setting', chatgptDisclaimerSettingInput.value);
                }

                if(chatbotChatgptAudienceChoiceInput) {
                    localStorage.setItem('chatbot_chatgpt_audience_choice', chatbotChatgptAudienceChoiceInput.value);
                }

                if(chatgptWidthSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_width_setting', chatgptWidthSettingInput.value);
                }

                if(chatgptDiagnosticsSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_diagnostics', chatgptDiagnosticsSettingInput.value);
                }

                if(chatgptCustomErrorMessageInput) {
                    localStorage.setItem('chatbot_chatgpt_custom_error_message', chatgptCustomErrorMessageInput.value);
                }
                
                // Avatar Settings - Ver 1.5.0
                if(chatgptAvatarIconSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_avatar_icon_setting', chatgptAvatarIconSettingInput.value);
                }

                if(chatgptAvatarIconURLSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_avatar_icon_url_setting', chatgptAvatarIconURLSettingInput.value);
                }

                if(chatgptCustomAvatarIconSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_custom_avatar_icon_setting', chatgptCustomAvatarIconSettingInput.value);
                }
                
                if(chatgptAvatarGreetingSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_avatar_greeting_setting', chatgptAvatarGreetingSettingInput.value);
                }

                if(chatgptEnableCustomButtonsInput) {
                    localStorage.setItem('chatbot_chatgpt_enable_custom_buttons', chatgptEnableCustomButtonsInput.value);
                }

                if(chatgptCustomButtonName1Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_name_1', chatgptCustomButtonName1Input.value);
                }

                if(chatgptCustomButtonURL1Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_url_1', chatgptCustomButtonURL1Input.value);
                }

                if(chatgptCustomButtonName2Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_name_2', chatgptCustomButtonName2Input.value);
                }

                if(chatgptCustomButtonURL2Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_url_2', chatgptCustomButtonURL2Input.value);
                }

                if(chatgptCustomButtonName3Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_name_3', chatgptCustomButtonName3Input.value);
                }

                if(chatgptCustomButtonURL3Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_url_3', chatgptCustomButtonURL3Input.value);
                }

                if(chatgptCustomButtonName4Input) {
                    localStorage.setItem('chatbot_chatgpt_custom_button_name_4', chatgptCustomButtonName4Input.value);
                }

                // Allow file uploads - Ver 1.7.6
                if(chatgptAllowFileUploadsInput) {
                    localStorage.setItem('chatbot_chatgpt_allow_file_uploads', chatgptAllowFileUploadsInput.value);
                }

                // Timeout Setting - Ver 1.8.8
                if(chatgptTimeoutSettingInput) {
                    localStorage.setItem('chatbot_chatgpt_timeout_setting', chatgptTimeoutSettingInput.value);
                }

                // Voice Option - Ver 1.9.5
                if(chatgptVoiceOptionInput) {
                    localStorage.setItem('chatbot_chatgpt_voice_option', chatgptVoiceOptionInput.value);
                }

                // Audio Output Option - Ver 1.9.5
                if(chatgptAudioOutputOptionInput) {
                    localStorage.setItem('chatbot_chatgpt_audio_output_option', chatgptAudioOutputOptionInput.value);
                }

                // Force Page Reload on Conversation Cleared - Ver 2.0.4
                if(chatgptForcePageReloadInput) {
                    localStorage.setItem('chatbot_chatgpt_force_page_reload', chatgptForcePageReloadInput.value);
                }

            });
        }

        // DIAG - Diagnostics - Ver 1.8.5
        // console.log('Chatbot: NOTICE: Exiting chatbot_chatgpt_localize');
        
    }

    // DIAG - Diagnostics - Ver 1.8.5
    // console.log('Chatbot: NOTICE: Before call to chatbot_chatgpt_localize');

    // Localize the chatbot settings
    chatbot_chatgpt_localize();

    // DIAG - Diagnostics - Ver 1.8.5
    // console.log('Chatbot: NOTICE: After call to chatbot_chatgpt_loccalize');

});
