(function() {
                var $email = $('#email'),
                    $fname = $('#fname'),
                    $form = $('form'),
                    $github = $('.github'),
                    $githubAccount = $('#github_account_text'),
                    $githubLine = $('#github_line'),
                    $lname = $('#lname'),
                    $slack = $('.slack'),
                    $slackAccount = $('#slack_account_text'),
                    $slackLine = $('#slack_line');
                
                $('#fname, #lname').change(function(){
                    var email = ($fname.val().substr(0,1) + $lname.val().replace(/\s/g, '')).toLocaleLowerCase() + '@nearsoft.com';
                    $email.val(email);
                });
                
                $github.change(function(){
                    $githubLine.show();
                    if(JSON.parse($(this).filter(':checked').val())) {
                        $githubAccount.text('Existing GitHub username');
                    } else {
                        $githubAccount.text('Please choose a GitHub username');
                    }
                    
                });
                
                $slack.change(function(){
                    $slackLine.show();
                    if(JSON.parse($(this).filter(':checked').val())) {
                        $slackAccount.text('Existing slack username');
                    } else {
                        $slackAccount.text('Please choose a slack username');
                    }
                    
                });
                
                $form.submit(function(){
                    event.preventDefault();
                });
                
            })();