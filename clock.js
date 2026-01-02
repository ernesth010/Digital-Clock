 function updateClock() {
            const now = new Date();
            
            // Get time components
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            
            // Add leading zeros
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            // Update time display
            const timeString = `${hours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds}`;
            document.getElementById('time').innerHTML = timeString;
            
            // Update date
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', options);
            document.getElementById('date').innerText = dateString;
            
            // Update day
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayString = days[now.getDay()];
            document.getElementById('day').innerText = dayString;
        }

        // Update clock immediately
        updateClock();
        
        // Update clock every second
        setInterval(updateClock, 1000);

        // Add greeting based on time
        function addGreeting() {
            const hour = new Date().getHours();
            let greeting;
            
            if (hour < 12) {
                greeting = "🌅 Good Morningm Ernest!";
            } else if (hour < 18) {
                greeting = "☀️ Good Afternoon!";
            } else {
                greeting = "🌙 Good Evening!";
            }
            
            const h1 = document.querySelector('h1');
            h1.innerHTML = greeting;
        }

        addGreeting();