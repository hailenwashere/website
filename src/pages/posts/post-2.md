---
layout: "../../layouts/MarkdownPostLayout.astro"
title: 'Working in China: Day 2'
pubDate: 2022-07-09
description: 'Writing for fun on the second day of work'
author: 'Helen Feng'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["work", "learning"]
---

## Thoughts On First Day

1. **Work Hours**: I didn't think the work hours would really be that long. My dad and I got to the campus (which is like some sort of incubation center for a lot of different tech/engineering companies), and had breakfast around 8am, and headed into work at 9. We had a two hour lunch break from 12pm to 2, and didnt leave work until 6:30pm.

2. **Work Culture**: Work culture is no joke either. I didn't do much, since I was working on setting up my computer, but everyone seems to be working hard, no getting up that much, during the entire work day. What really got me was the fact that after lunch, everyone was napping on their foldable beds in the office. Chinese nap culture is just different!

## What I Did Yesterday

I worked on setting up my environment yesterday. Unfortunately, since this is more of an engineering company than application company, the technologies I'm familiar with, like React and Python, aren't really used. Instead, they use C++ (Visual Studio) and Qt, which I've never used.

I downloaded VMware Fusion 13.5.2 for personal use, to run Windows on a VM. The hard part came when I was trying to follow the docs as normal, but for some reason, I kept getting the error `Esd2iso tool failed to get ESD url and sha for Windows 11 Professional version for en-us language from Microsoft` while trying to create a Windows 11 VM. I tried running the w11arm_esd2iso script myself, which I downloaded from github, but it said that there wasn't enough free disk space, which I was also really confused by. I couldn't use the .iso disk image I downloaded from Windows either, since it was for x86 infrastructure and wasn't compatible with the ARM chip my computer has. This is because a VM virtualizes the machine, but does not emulate it. 

- virtualization - partitions physical hardware resources into multiple virtual environments, each behaving like a distinct machine

- emulation - mimics the entire hardware, allowing software from one platform to run on another, acting as a translator between the software and the host system

Long story short, I really should have paid more attention in CS111. I ended up following a guide on Zhihu, which is basically Chinese Quora/StackOverflow but longer posts? It was a really good guide, and detailed every last step to run Windows 11 on an ARM computer. The downside is that it was completely in Chinese, so I struggled a lot getting through the technical jargon. My Chinese is going to be professional level by the end of this summer, I hope. But yay!! I have a VM that can run Windows 11 now!

I finished the day by downloading Visual Studio 2017 and Qt from one of the team members, and ran an empty project on Qt in the VM. One thing I'm worried about is the size of the VM, and the size of the software that I might have to download in the VM. I'm running out of space!

I had a lot of time left, so I came back to the Astro guide and worked through 3 or 4 units. I'm almost done! Hopefully I can make this website more me in the next week. Its the second day of work now, but the project environment and some logistical things haven't been worked out yet, so I'm still working on this site.

