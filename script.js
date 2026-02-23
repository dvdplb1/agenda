// Simple agenda script for card-based layout

document.addEventListener('DOMContentLoaded', function() {
    // Add subtle hover effects
    const eventItems = document.querySelectorAll('.event-item');
    
    eventItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
