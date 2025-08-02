const canvas = document.getElementById('circuit-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circuits = [];

for (let i = 0; i < 150; i++) {
  circuits.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ffcc';
  circuits.forEach(dot => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    ctx.fill();
    dot.y += dot.speed;
    if (dot.y > canvas.height) dot.y = 0;
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// const members = [
//     {
//       name: "Alex Chen",
//       imageUrl: "media/members/president.jpg",
//     },
//     {
//       name: "Sarah Kim",
//       imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
//     },
//     {
//       name: "Marcus Johnson",
//       imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
//     },
//     {
//       name: "Emma Rodriguez",
//       imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
//     },
//     {
//       name: "David Park",
//       imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
//     },
//     {
//       name: "Lisa Chang",
//       imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
//     },
//   ];

//   const container = document.getElementById("memberGallery");
//   members.forEach((member) => {
//     const card = document.createElement("div");
//     card.className = "member-card glass floating";
//     card.innerHTML = 
//       <img src="${member.imageUrl}" alt="${member.name}" />
//     ;
//     container.appendChild(card);
//   });
