document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const visibleProjectsCounter = document.getElementById('visible-projects');
    const totalProjectsCounter = document.getElementById('total-projects');
    
    // Contador total de projetos
    totalProjectsCounter.textContent = projectCards.length;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ativar botão selecionado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            let visibleCount = 0;
            
            // Filtrar projetos
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Atualizar contador
            visibleProjectsCounter.textContent = visibleCount;
            
            // Animação
            if (filterValue === 'all') {
                animateProjects();
            } else {
                animateFilteredProjects(filterValue);
            }
        });
    });
    
    // Animação inicial
    animateProjects();
    
    function animateProjects() {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    function animateFilteredProjects(filterValue) {
        let delay = 0;
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, delay * 100);
                delay++;
            }
        });
    }
});