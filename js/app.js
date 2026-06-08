
        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. DATA MANAGEMENT (localStorage + Mock Data)
        const DEFAULT_DATA = {
            project: { name: 'KeyForge MK-1 Mekanik Klavye Lansmanı', start: '2026-01-01', end: '2026-06-30' },
            team: [
                { id: 't1', name: 'Sevenç', role: 'CEO', avatar: 'https://ui-avatars.com/api/?name=Sevenc&background=6366f1&color=fff' },
                { id: 't2', name: 'Zeynep', role: 'Ürün', avatar: 'https://ui-avatars.com/api/?name=Zeynep&background=ec4899&color=fff' },
                { id: 't3', name: 'Emre', role: 'Yazılım', avatar: 'https://ui-avatars.com/api/?name=Emre&background=10b981&color=fff' },
                { id: 't4', name: 'Selin', role: 'Tasarım', avatar: 'https://ui-avatars.com/api/?name=Selin&background=f59e0b&color=fff' },
                { id: 't5', name: 'Kemal', role: 'Üretim', avatar: 'https://ui-avatars.com/api/?name=Kemal&background=ef4444&color=fff' },
                { id: 't6', name: 'Lale', role: 'Pazarlama', avatar: 'https://ui-avatars.com/api/?name=Lale&background=8b5cf6&color=fff' }
            ],
            tasks: [
                { id: 'ts1', title: 'Pazar araştırması ve rakip analizi', status: 'done', assignee: 't2', start: '2026-01-01', end: '2026-01-15', priority: 'high', progress: 100 },
                { id: 'ts2', title: 'Switch ve Materyal seçimi', status: 'done', assignee: 't2', start: '2026-01-10', end: '2026-01-25', priority: 'high', progress: 100 },
                { id: 'ts3', title: 'PCB ve Kasa tasarımı', status: 'in-progress', assignee: 't4', start: '2026-01-20', end: '2026-02-20', priority: 'high', progress: 60 },
                { id: 'ts4', title: 'Prototip V1 üretimi', status: 'todo', assignee: 't5', start: '2026-02-21', end: '2026-03-15', priority: 'high', progress: 0 },
                { id: 'ts5', title: 'Firmware geliştirme', status: 'in-progress', assignee: 't3', start: '2026-01-25', end: '2026-03-20', priority: 'medium', progress: 40 },
                { id: 'ts6', title: 'RGB kontrol yazılımı (Desktop)', status: 'todo', assignee: 't3', start: '2026-03-01', end: '2026-04-30', priority: 'medium', progress: 0 },
                { id: 'ts7', title: 'Crowdfunding hazırlığı (Video, Görsel)', status: 'in-progress', assignee: 't6', start: '2026-02-01', end: '2026-03-30', priority: 'high', progress: 30 },
                { id: 'ts8', title: 'Seri üretim anlaşmaları', status: 'todo', assignee: 't1', start: '2026-04-01', end: '2026-04-20', priority: 'high', progress: 0 },
                { id: 'ts9', title: 'E-ticaret altyapısı', status: 'todo', assignee: 't3', start: '2026-04-15', end: '2026-05-30', priority: 'medium', progress: 0 },
                { id: 'ts10', title: 'Basın bülteni ve Influencer gönderimleri', status: 'todo', assignee: 't6', start: '2026-05-15', end: '2026-06-15', priority: 'high', progress: 0 }
            ],
            budget: {
                total: 850000,
                categories: [
                    { id: 'b1', name: 'Ar-Ge ve Tasarım', planned: 200000, spent: 140000, color: '#6366f1' },
                    { id: 'b2', name: 'Üretim ve Prototip', planned: 400000, spent: 45000, color: '#ec4899' },
                    { id: 'b3', name: 'Pazarlama', planned: 150000, spent: 30000, color: '#10b981' },
                    { id: 'b4', name: 'Operasyon', planned: 100000, spent: 15000, color: '#f59e0b' }
                ]
            },
            risks: [
                { id: 'r1', title: 'Çip krizi kaynaklı PCB tedarik gecikmesi', impact: 'high', probability: 'medium', owner: 't5', status: 'open' },
                { id: 'r2', title: 'Crowdfunding hedefinin tutmaması', impact: 'high', probability: 'low', owner: 't6', status: 'open' },
                { id: 'r3', title: 'Yazılım Mac OS uyum sorunları', impact: 'medium', probability: 'medium', owner: 't3', status: 'open' }
            ],
            milestones: [
                { id: 'm1', title: 'Proje Başlangıcı', date: '2026-01-01', status: 'completed', desc: 'Kickoff toplantısı ve kaynak planlaması.', progress: 100, deliverables: 'Proje Tüzüğü, Kaynak Planı' },
                { id: 'm2', title: 'Tasarım Onayı', date: '2026-02-20', status: 'pending', desc: 'Endüstriyel tasarımın dondurulması.', progress: 85, deliverables: '3D CAD Modelleri, PCB Şeması' },
                { id: 'm3', title: 'Prototip V1', date: '2026-03-15', status: 'pending', desc: 'İlk çalışan donanım numunesinin test edilmesi.', progress: 40, deliverables: 'Çalışan Klavye, Firmware V0.1' },
                { id: 'm4', title: 'Kampanya Lansmanı', date: '2026-04-01', status: 'pending', desc: 'Kickstarter kampanyası açılışı.', progress: 10, deliverables: 'Tanıtım Videosu, Landing Page' },
                { id: 'm5', title: 'Seri Üretime Geçiş', date: '2026-05-01', status: 'pending', desc: 'Kitlesel üretimin başlaması ve tedarik zinciri entegrasyonu.', progress: 0, deliverables: 'Üretim Anlaşmaları, Kalite Kontrol Planı' },
                { id: 'm6', title: 'İlk Teslimatlar', date: '2026-06-30', status: 'pending', desc: 'Son kullanıcıya kargo çıkışları.', progress: 0, deliverables: 'Kargolama Takip Sistemi Entegrasyonu' }
            ],
            ganttData: [
                {
                    id: 'gcat1', title: '1. HAZIRLIK & TASARIM', color: '#3b82f6', start: '2026-01-01', end: '2026-02-20',
                    tasks: [
                        { id: 'gts1', title: '1.1 Pazar & Rekabet Analizi', assignee: 't2', start: '2026-01-01', end: '2026-01-10', color: '#ef4444' },
                        { id: 'gts2', title: '1.2 Anahtar (Switch) & Materyal Seçimi', assignee: 't2', start: '2026-01-10', end: '2026-01-20', color: '#3b82f6' },
                        { id: 'gts3', title: '1.3 PCB Şematik & Kasa 3D Tasarımı', assignee: 't4', start: '2026-01-15', end: '2026-02-20', color: '#f59e0b' }
                    ]
                },
                {
                    id: 'gcat2', title: '2. PROTOTİP ÜRETİMİ', color: '#f59e0b', start: '2026-02-21', end: '2026-03-25',
                    tasks: [
                        { id: 'gts4', title: '2.1 PCB Baskı ve Dizgi', assignee: 't5', start: '2026-02-21', end: '2026-03-05', color: '#10b981' },
                        { id: 'gts5', title: '2.2 CNC Kasa Üretimi', assignee: 't5', start: '2026-02-25', end: '2026-03-10', color: '#ec4899' },
                        { id: 'gts6', title: '2.3 Firmware Entegrasyonu (V0.1)', assignee: 't3', start: '2026-03-01', end: '2026-03-25', color: '#8b5cf6' }
                    ]
                },
                {
                    id: 'gcat3', title: '3. TEST & OPTİMİZASYON', color: '#10b981', start: '2026-03-20', end: '2026-04-15',
                    tasks: [
                        { id: 'gts7', title: '3.1 Gecikme (Latency) Testleri', assignee: 't3', start: '2026-03-20', end: '2026-03-30', color: '#f59e0b' },
                        { id: 'gts8', title: '3.2 Akustik ve Tokluk Testi (Sound Test)', assignee: 't4', start: '2026-03-25', end: '2026-04-05', color: '#3b82f6' },
                        { id: 'gts9', title: '3.3 RGB Masaüstü Yazılımı Beta', assignee: 't3', start: '2026-04-01', end: '2026-04-15', color: '#ef4444' }
                    ]
                },
                {
                    id: 'gcat4', title: '4. SERİ ÜRETİM & LANSMAN', color: '#8b5cf6', start: '2026-04-01', end: '2026-06-30',
                    tasks: [
                        { id: 'gts10', title: '4.1 Kickstarter Kampanya Başlangıcı', assignee: 't6', start: '2026-04-01', end: '2026-04-30', color: '#10b981' },
                        { id: 'gts11', title: '4.2 Seri Üretim Tedarikleri', assignee: 't1', start: '2026-05-01', end: '2026-05-20', color: '#f59e0b' },
                        { id: 'gts12', title: '4.3 Montaj & Kalite Kontrol', assignee: 't5', start: '2026-05-15', end: '2026-06-15', color: '#3b82f6' },
                        { id: 'gts13', title: '4.4 Dünya Çapı Kargo Gönderimi', assignee: 't1', start: '2026-06-15', end: '2026-06-30', color: '#ef4444' }
                    ]
                }
            ]
        };

        let appData = JSON.parse(localStorage.getItem('keyforge_data'));
        
        // MIGRATION: Fix undefined progress/deliverables and add ganttData
        if (appData) {
            let migrated = false;
            if (appData.milestones && appData.milestones.length > 0 && typeof appData.milestones[0].progress === 'undefined') {
                appData.milestones = DEFAULT_DATA.milestones;
                migrated = true;
            }
            if (!appData.ganttData) {
                appData.ganttData = DEFAULT_DATA.ganttData;
                migrated = true;
            }
            if (migrated) saveData();
        }
    
        if (!appData) {
            appData = DEFAULT_DATA;
            saveData();
        }

        function saveData() {
            localStorage.setItem('keyforge_data', JSON.stringify(appData));
        }

        window.resetData = function() {
            if(confirm("Tüm verileri sıfırlayıp örnek verilere dönmek istediğinize emin misiniz?")) {
                appData = DEFAULT_DATA;
                saveData();
                renderAll();
            }
        };

        function getMember(id) {
            return appData.team.find(m => m.id === id) || { name: 'Bilinmiyor', avatar: '' };
        }

        function formatDate(dateStr) {
            const d = new Date(dateStr);
            return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
        }

        function formatMoney(amount) {
            return new Intl.NumberFormat('tr-TR').format(amount) + ' ₺';
        }

        // 2. NAVIGATION LOGIC
        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Update active class on nav
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                link.classList.add('active');
                
                // Show selected page
                const targetId = 'page-' + link.getAttribute('data-target');
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');
                
                localStorage.setItem('activeTab', link.getAttribute('data-target'));
            });
        });

        // 3. RENDERING LOGIC
        function renderAll() {
            renderDashboard();
            renderKanban();
            renderTasksTable();
            renderTeamGrid();
            renderBudget();
            renderRisks();
            renderTimeline();
            renderGantt();
            lucide.createIcons();
        }

        function renderDashboard() {
            // KPIs
            const completedTasks = appData.tasks.filter(t => t.status === 'done').length;
            const totalTasks = appData.tasks.length;
            const progress = Math.round((completedTasks / totalTasks) * 100) || 0;
            
            document.getElementById('kpi-progress').innerText = progress + '%';
            document.getElementById('kpi-progress-bar').style.width = progress + '%';

            const spentBudget = appData.budget.categories.reduce((acc, c) => acc + c.spent, 0);
            const remainingBudget = appData.budget.total - spentBudget;
            const budgetPercent = (spentBudget / appData.budget.total) * 100;
            
            document.getElementById('kpi-budget').innerText = formatMoney(remainingBudget);
            document.getElementById('kpi-budget-bar').style.width = budgetPercent + '%';
            
            document.getElementById('kpi-tasks').innerText = totalTasks;

            const nextMilestone = appData.milestones.find(m => m.status === 'pending');
            if (nextMilestone) {
                document.getElementById('kpi-milestone').innerText = nextMilestone.title;
                document.getElementById('kpi-milestone-date').innerText = formatDate(nextMilestone.date);
            }

            // Recent Tasks
            const recentTasksHtml = appData.tasks.slice(0, 4).map(t => `
                <tr>
                    <td><div style="font-weight: 500;">${t.title}</div></td>
                    <td><span class="badge ${t.status}">${t.status === 'done' ? 'Tamamlandı' : t.status === 'in-progress' ? 'Devam Ediyor' : 'Yapılacak'}</span></td>
                    <td><img src="${getMember(t.assignee).avatar}" class="avatar-sm" title="${getMember(t.assignee).name}"></td>
                </tr>
            `).join('');
            document.getElementById('dashboard-recent-tasks').querySelector('tbody').innerHTML = recentTasksHtml;

            // Team Status
            const teamHtml = appData.team.slice(0, 4).map(m => {
                const memberTasks = appData.tasks.filter(t => t.assignee === m.id && t.status !== 'done').length;
                return `
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <img src="${m.avatar}" class="avatar">
                        <div>
                            <div style="font-weight: 500;">${m.name}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${m.role}</div>
                        </div>
                    </div>
                    <div class="badge" style="background: var(--bg-surface-hover);">${memberTasks} Görev</div>
                </div>
            `}).join('');
            document.getElementById('dashboard-team-list').innerHTML = teamHtml;
        }

        function renderKanban() {
            const columns = { 'todo': [], 'in-progress': [], 'review': [], 'done': [] };
            
            appData.tasks.forEach(t => {
                if(columns[t.status]) columns[t.status].push(t);
            });

            Object.keys(columns).forEach(status => {
                const colEl = document.getElementById(`kanban-${status}`);
                document.getElementById(`count-${status}`).innerText = columns[status].length;
                
                colEl.innerHTML = columns[status].map(t => {
                    const member = getMember(t.assignee);
                    return `
                        <div class="kanban-card" draggable="true" data-id="${t.id}">
                            <div class="card-title">${t.title}</div>
                            <div class="card-meta">
                                <span class="badge ${t.priority}">${t.priority === 'high' ? 'Yüksek' : t.priority === 'medium' ? 'Orta' : 'Düşük'}</span>
                                <div class="flex items-center gap-2">
                                    <span>${formatDate(t.end)}</span>
                                    <img src="${member.avatar}" class="avatar-sm" title="${member.name}">
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            });

            initDragAndDrop();
        }

        function renderTasksTable() {
            const tbody = document.getElementById('task-list-body');
            tbody.innerHTML = appData.tasks.map(t => {
                const member = getMember(t.assignee);
                const statusText = t.status === 'done' ? 'Tamamlandı' : (t.status === 'in-progress' ? 'Devam Ediyor' : 'Yapılacak');
                const priorityText = t.priority === 'high' ? 'Yüksek' : (t.priority === 'medium' ? 'Orta' : 'Düşük');
                return `
                    <tr>
                        <td style="font-weight: 500;">${t.title}</td>
                        <td><span class="badge ${t.status}">${statusText}</span></td>
                        <td><span class="badge ${t.priority}">${priorityText}</span></td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img src="${member.avatar}" class="avatar-sm"> ${member.name}
                            </div>
                        </td>
                        <td style="color: var(--text-muted);">${formatDate(t.start)}</td>
                        <td style="color: var(--text-muted);">${formatDate(t.end)}</td>
                        <td><button class="btn" style="padding: 4px; color: var(--danger);" onclick="deleteTask('${t.id}')"><i data-lucide="trash-2" style="width: 16px; height: 16px;"></i></button></td>
                    </tr>
                `;
            }).join('');
        }

        // MODAL LOGIC
        function openTaskModal() {
            document.getElementById('task-modal').classList.add('active');
            const assigneeSelect = document.getElementById('task-assignee');
            assigneeSelect.innerHTML = appData.team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
        }

        function closeTaskModal() {
            document.getElementById('task-modal').classList.remove('active');
            document.getElementById('task-form').reset();
        }

        function submitTask(e) {
            e.preventDefault();
            const title = document.getElementById('task-title').value;
            const status = document.getElementById('task-status').value;
            const assignee = document.getElementById('task-assignee').value;
            
            const newTask = {
                id: 'ts' + Date.now(),
                title: title,
                status: status,
                assignee: assignee,
                start: new Date().toISOString().split('T')[0],
                end: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
                priority: 'medium',
                progress: 0
            };
            
            appData.tasks.push(newTask);
            saveData();
            renderAll();
            closeTaskModal();
        }

        function deleteTask(id) {
            if(confirm("Bu görevi silmek istediğinize emin misiniz?")) {
                appData.tasks = appData.tasks.filter(t => t.id !== id);
                saveData();
                renderAll();
            }
        }

        // RISK MODAL LOGIC
        function openRiskModal() {
            document.getElementById('risk-modal').classList.add('active');
            const ownerSelect = document.getElementById('risk-owner');
            ownerSelect.innerHTML = appData.team.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
        }

        function closeRiskModal() {
            document.getElementById('risk-modal').classList.remove('active');
            document.getElementById('risk-form').reset();
        }

        function submitRisk(e) {
            e.preventDefault();
            const newRisk = {
                id: 'r' + Date.now(),
                title: document.getElementById('risk-title').value,
                probability: document.getElementById('risk-probability').value,
                impact: document.getElementById('risk-impact').value,
                owner: document.getElementById('risk-owner').value,
                status: 'open'
            };
            appData.risks.push(newRisk);
            saveData();
            renderAll();
            closeRiskModal();
        }

        function deleteRisk(id) {
            if(confirm("Bu riski silmek istediğinize emin misiniz?")) {
                appData.risks = appData.risks.filter(r => r.id !== id);
                saveData();
                renderAll();
            }
        }

        // TEAM MODAL LOGIC
        function openTeamModal() {
            document.getElementById('team-modal').classList.add('active');
        }

        function closeTeamModal() {
            document.getElementById('team-modal').classList.remove('active');
            document.getElementById('team-form').reset();
        }

        function submitTeam(e) {
            e.preventDefault();
            const name = document.getElementById('team-name').value;
            const newTeam = {
                id: 't' + Date.now(),
                name: name,
                role: document.getElementById('team-role').value,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`
            };
            appData.team.push(newTeam);
            saveData();
            renderAll();
            closeTeamModal();
        }

        function deleteTeam(id) {
            if(confirm("Bu üyeyi silmek istediğinize emin misiniz?")) {
                appData.team = appData.team.filter(t => t.id !== id);
                saveData();
                renderAll();
            }
        }

        function renderTeamGrid() {
            const grid = document.getElementById('team-grid');
            grid.innerHTML = appData.team.map(m => `
                <div class="glass-panel team-card" style="position: relative;">
                    <button class="btn" style="position: absolute; top: 10px; right: 10px; padding: 4px; color: var(--danger);" onclick="deleteTeam('${m.id}')">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                    </button>
                    <img src="${m.avatar}" class="team-avatar">
                    <div>
                        <h3>${m.name}</h3>
                        <p>${m.role}</p>
                    </div>
                    <button class="btn" style="width: 100%; justify-content: center;">Profile Git</button>
                </div>
            `).join('');
        }

        function renderBudget() {
            const rings = document.getElementById('budget-chart-rings');
            const categoriesContainer = document.getElementById('budget-categories');
            
            const totalSpent = appData.budget.categories.reduce((sum, c) => sum + c.spent, 0);
            document.getElementById('budget-total-spent').innerText = formatMoney(totalSpent);

            let dashOffset = 0;
            const r = 15.91549430918954;
            const circumference = 100;
            
            rings.innerHTML = appData.budget.categories.map((c) => {
                const percent = (c.spent / totalSpent) * 100 || 0;
                const strokeDasharray = `${percent} ${circumference - percent}`;
                const offset = circumference - dashOffset;
                dashOffset += percent;
                
                return `
                    <circle cx="18" cy="18" r="${r}" fill="transparent" stroke="${c.color}" stroke-width="4" 
                            stroke-dasharray="${strokeDasharray}" stroke-dashoffset="${offset}" 
                            stroke-linecap="round" transform="rotate(-90 18 18)"></circle>
                `;
            }).join('');
            
            // Add background ring
            rings.innerHTML = `<circle cx="18" cy="18" r="${r}" fill="transparent" stroke="var(--bg-surface-hover)" stroke-width="4"></circle>` + rings.innerHTML;

            categoriesContainer.innerHTML = appData.budget.categories.map(c => `
                <div class="budget-item">
                    <div class="flex items-center">
                        <span class="budget-color-dot" style="background: ${c.color}"></span>
                        <div>
                            <div style="font-weight: 500;">${c.name}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">Planlanan: ${formatMoney(c.planned)}</div>
                        </div>
                    </div>
                    <div style="font-weight: 600;">${formatMoney(c.spent)}</div>
                </div>
            `).join('');
        }

        function renderRisks() {
            const tbody = document.getElementById('risk-list-body');
            tbody.innerHTML = appData.risks.map(r => {
                const owner = getMember(r.owner);
                return `
                    <tr>
                        <td style="font-weight: 500;">${r.title}</td>
                        <td><span class="badge ${r.probability === 'high' ? 'danger' : 'warning'}">${r.probability.toUpperCase()}</span></td>
                        <td><span class="badge ${r.impact === 'high' ? 'danger' : 'warning'}">${r.impact.toUpperCase()}</span></td>
                        <td><div class="flex items-center gap-2"><img src="${owner.avatar}" class="avatar-sm"> ${owner.name}</div></td>
                        <td><span class="badge ${r.status === 'open' ? 'in-progress' : 'done'}">${r.status === 'open' ? 'Açık' : 'Kapalı'}</span></td>
                        <td><button class="btn" style="padding: 4px; color: var(--danger);" onclick="deleteRisk('${r.id}')"><i data-lucide="trash-2" style="width: 16px; height: 16px;"></i></button></td>
                    </tr>
                `;
            }).join('');
        }

        let selectedMilestoneId = appData.milestones[0] ? appData.milestones[0].id : null;

        window.selectMilestone = function(id) {
            selectedMilestoneId = id;
            renderTimeline();
        }

        function renderTimeline() {
            const timeline = document.getElementById('milestone-timeline');
            if (!appData.milestones || appData.milestones.length === 0) return;
            
            if (!selectedMilestoneId) {
                selectedMilestoneId = appData.milestones[0].id;
            }

            // Generate Top Stepper
            let stepperHtml = '<div class="stepper-container">';
            appData.milestones.forEach((m, index) => {
                const isActive = m.id === selectedMilestoneId;
                const isCompleted = m.status === 'completed';
                const stepClass = isActive ? 'step active' : (isCompleted ? 'step completed' : 'step');
                stepperHtml += `
                    <div class="${stepClass}" onclick="selectMilestone('${m.id}')">
                        <div class="step-circle">${isCompleted ? '<i data-lucide="check" style="width:14px;"></i>' : index + 1}</div>
                        <div class="step-label">${m.title}</div>
                    </div>
                    ${index < appData.milestones.length - 1 ? '<div class="step-line"></div>' : ''}
                `;
            });
            stepperHtml += '</div>';

            // Selected Milestone Detail
            const selected = appData.milestones.find(m => m.id === selectedMilestoneId);
            let detailHtml = '';
            if (selected) {
                const isCompleted = selected.status === 'completed';
                const statusColor = isCompleted ? 'var(--success)' : (selected.progress > 0 ? 'var(--primary)' : 'var(--border)');
                
                detailHtml = `
                    <div class="glass-panel" style="margin-top: 2rem; border-top: 4px solid ${statusColor}; animation: fadeIn 0.3s ease; padding: 2rem;">
                        <div class="flex justify-between items-start" style="margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h2 style="font-size: 1.75rem; font-weight: 700; color: ${isCompleted ? 'var(--success)' : 'var(--text-main)'}">${selected.title}</h2>
                                <div style="font-size: 1rem; color: var(--text-muted); margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <i data-lucide="calendar" style="width:16px;"></i> Hedef Tarih: <strong style="color: var(--text-main);">${formatDate(selected.date)}</strong>
                                </div>
                            </div>
                            <span class="badge ${isCompleted ? 'done' : (selected.progress > 0 ? 'in-progress' : 'todo')}" style="font-size: 1rem; padding: 0.75rem 1.5rem; border-radius: 8px;">
                                ${isCompleted ? 'Tamamlandı' : (selected.progress > 0 ? 'Devam Ediyor' : 'Bekliyor')}
                            </span>
                        </div>
                        
                        <p style="color: var(--text-muted); margin-bottom: 2.5rem; font-size: 1.1rem; line-height: 1.7;">${selected.desc}</p>
                        
                        <div style="margin-bottom: 2.5rem; background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: var(--border-radius); border: 1px solid rgba(255,255,255,0.05);">
                            <div class="flex justify-between items-end" style="margin-bottom: 1rem;">
                                <span style="font-weight: 600; font-size: 1.1rem;">Aşama İlerlemesi</span>
                                <span style="color: ${selected.progress === 100 ? 'var(--success)' : 'var(--text-main)'}; font-size: 2rem; font-weight: 800;">${selected.progress}%</span>
                            </div>
                            <div class="progress-bg" style="height: 16px; border-radius: 8px; background: rgba(255,255,255,0.05);">
                                <div class="progress-fill" style="width: ${selected.progress}%; background: ${isCompleted ? 'var(--success)' : 'linear-gradient(90deg, var(--primary), var(--accent))'}; border-radius: 8px; transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);"></div>
                            </div>
                        </div>

                        <div style="background: rgba(0,0,0,0.3); padding: 2rem; border-radius: var(--border-radius); border: 1px solid rgba(255,255,255,0.05);">
                            <h3 style="color: var(--text-main); margin-bottom: 1.5rem; font-size: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
                                <i data-lucide="check-square" style="color: var(--primary); width: 24px; height: 24px;"></i> Beklenen Teslimatlar (Deliverables)
                            </h3>
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
                                ${selected.deliverables.split(',').map(d => `
                                    <li style="display: flex; align-items: center; gap: 1rem; color: var(--text-muted); font-size: 1.05rem; padding: 0.75rem; background: rgba(255,255,255,0.02); border-radius: 8px;">
                                        <div style="width: 24px; height: 24px; border-radius: 6px; border: 2px solid ${isCompleted ? 'var(--success)' : 'var(--primary)'}; display: flex; align-items: center; justify-content: center; background: ${isCompleted ? 'var(--success-light)' : 'transparent'};">
                                            ${isCompleted ? '<i data-lucide="check" style="width: 14px; color: var(--success);"></i>' : ''}
                                        </div>
                                        ${d.trim()}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }

            timeline.innerHTML = stepperHtml + detailHtml;
            lucide.createIcons();
        }

        function renderGantt() {
            const container = document.getElementById('gantt-chart-container');
            if (!appData.ganttData) return;
            
            const projStart = new Date(appData.project.start);
            const projEnd = new Date(appData.project.end);
            
            // Generate months header
            const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'];
            const totalDays = (projEnd - projStart) / (1000 * 60 * 60 * 24);
            const today = new Date('2026-03-10'); // Demo current date
            const todayLeft = Math.max(0, ((today - projStart) / (1000 * 60 * 60 * 24) / totalDays) * 100);

            const headerHtml = `
                <div class="gantt-header-row">
                    <div class="gantt-task-list-header">
                        <span>Aşamalar ve Görevler</span>
                        <span class="badge" style="background: var(--accent-light); color: var(--accent);">Bugün</span>
                    </div>
                    <div class="gantt-timeline-header">
                        ${months.map(m => `<div class="gantt-month-col">${m} 2026</div>`).join('')}
                    </div>
                </div>
            `;
            
            let rowsHtml = '';
            
            appData.ganttData.forEach((cat, index) => {
                const cStart = new Date(cat.start);
                const cEnd = new Date(cat.end);
                const cDuration = Math.ceil((cEnd - cStart) / (1000 * 60 * 60 * 24));
                
                const cLeftPercent = Math.max(0, ((cStart - projStart) / (1000 * 60 * 60 * 24) / totalDays) * 100);
                const cWidthPercent = Math.max(0.5, ((cEnd - cStart) / (1000 * 60 * 60 * 24) / totalDays) * 100);

                // Check if this category is collapsed
                // By default, let's keep them expanded. We can store state in a simple object.
                const isCollapsed = window.ganttCollapsedState && window.ganttCollapsedState[cat.id];

                // Category Row
                rowsHtml += `
                    <div class="gantt-row category-row" onclick="toggleGanttCategory('${cat.id}')" style="cursor: pointer;">
                        <div class="gantt-task-col">
                            <i data-lucide="${isCollapsed ? 'chevron-right' : 'chevron-down'}" style="width: 16px; margin-right: 8px; color: var(--text-muted); transition: transform 0.2s;"></i>
                            <span class="category-title" style="color: ${cat.color}">${cat.title}</span>
                            <span class="task-duration">${cDuration}g</span>
                        </div>
                        <div class="gantt-timeline-col">
                            <div class="gantt-bar category-bar" style="left: ${cLeftPercent}%; width: ${cWidthPercent}%; background: ${cat.color}33; border: 1px solid ${cat.color};"></div>
                            <div class="gantt-hover-actions">
                                <button onclick="event.stopPropagation()"><i data-lucide="edit-2"></i></button>
                                <button onclick="event.stopPropagation()"><i data-lucide="plus"></i></button>
                                <button onclick="event.stopPropagation()"><i data-lucide="trash-2"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                
                // Subtasks
                if (!isCollapsed) {
                    cat.tasks.forEach(t => {
                        const tStart = new Date(t.start);
                        const tEnd = new Date(t.end);
                        const tDuration = Math.ceil((tEnd - tStart) / (1000 * 60 * 60 * 24));
                        
                        const tLeftPercent = Math.max(0, ((tStart - projStart) / (1000 * 60 * 60 * 24) / totalDays) * 100);
                        const tWidthPercent = Math.max(0.5, ((tEnd - tStart) / (1000 * 60 * 60 * 24) / totalDays) * 100);
                        
                        const member = getMember(t.assignee);
                        
                        rowsHtml += `
                            <div class="gantt-row subtask-row">
                                <div class="gantt-task-col">
                                    <span class="subtask-title" style="border-left-color: ${t.color}">${t.title}</span>
                                    <div class="subtask-meta">
                                        <span class="assignee-name">${member.name}</span>
                                    </div>
                                </div>
                                <div class="gantt-timeline-col">
                                    <div class="gantt-bar subtask-bar" style="left: ${tLeftPercent}%; width: ${tWidthPercent}%; background: ${t.color};">
                                        <span class="bar-duration">${tDuration}g</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }
            });
            
            container.innerHTML = `<div class="gantt-table">` + headerHtml + `<div class="gantt-body" style="position: relative;">` + rowsHtml + `<div class="gantt-today-line" style="left: calc(300px + ${todayLeft * 0.7}%);"></div></div></div>`;
            lucide.createIcons();
        }

        // Add toggle state
        window.ganttCollapsedState = {};
        window.toggleGanttCategory = function(catId) {
            window.ganttCollapsedState[catId] = !window.ganttCollapsedState[catId];
            renderGantt();
        };

        // 4. DRAG AND DROP (KANBAN)
        function initDragAndDrop() {
            let draggedItem = null;
            
            document.querySelectorAll('.kanban-card').forEach(card => {
                card.addEventListener('dragstart', function() {
                    draggedItem = this;
                    setTimeout(() => this.style.opacity = '0.5', 0);
                });
                
                card.addEventListener('dragend', function() {
                    setTimeout(() => {
                        this.style.opacity = '1';
                        draggedItem = null;
                    }, 0);
                });
            });

            document.querySelectorAll('.kanban-cards').forEach(container => {
                container.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    this.style.background = 'rgba(255,255,255,0.05)';
                });
                
                container.addEventListener('dragleave', function() {
                    this.style.background = 'transparent';
                });

                container.addEventListener('drop', function(e) {
                    this.style.background = 'transparent';
                    if (draggedItem) {
                        this.appendChild(draggedItem);
                        
                        // Update Data
                        const taskId = draggedItem.getAttribute('data-id');
                        const newStatus = this.parentElement.getAttribute('data-status');
                        
                        const task = appData.tasks.find(t => t.id === taskId);
                        if (task && task.status !== newStatus) {
                            task.status = newStatus;
                            saveData();
                            // Update counts without full re-render
                            renderKanban(); 
                            renderDashboard(); // Re-render dashboard KPI
                        }
                    }
                });
            });
        }

        // Initialize App
        document.addEventListener('DOMContentLoaded', () => {
            renderAll();
            
            // Aktif tabı geri yükle
            const savedTab = localStorage.getItem('activeTab');
            if (savedTab) {
                const link = document.querySelector(`.nav-item[data-target="${savedTab}"]`);
                if (link) link.click();
            }
        });

    