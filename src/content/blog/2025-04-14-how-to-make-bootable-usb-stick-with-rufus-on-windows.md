---
title: 'How to make a bootable USB stick with Rufus on Windows?'
description: 'To install a new operating system or to have a dual boot system, you need to make a bootable USB stick to do that.'
pubDate: '2025-04-14'
heroImage: '/blog/images/rufus.png'
tags: ['linux','ubuntu']
---

Hey dudes,

So, today I want to tell you about something a bit geeky, but it's something that's super useful in the computer world: creating a bootable USB stick.

Think of it like this: imagine you have a game on a game cartridge (like the ones for a Nintendo Switch, but let's say a super advanced one that could install the whole game). To play that game on the console, you need to plug the cartridge in, right? A bootable USB stick is kind of like that cartridge for your computer's operating system (like Windows or Linux). It allows you to start your computer from the USB drive instead of its usual hard drive.

Now, why would you want to do this? Well, there are lots of reasons. One reason, and this is something I recently did myself, is to install a new operating system. I got tired of Windows 11 on my laptop (it's a long story, but let's just say I wanted to get closer to how servers work), so I decided to completely replace it with Ubuntu 24.04. Ubuntu is a type of Linux, which is another operating system that's very popular with computer pros.

It was a bit like giving my laptop a brain transplant! And to do that, I needed to create a bootable USB stick with the Ubuntu installation files.

This is where a cool little tool called Rufus comes in. Rufus is like a special tool that helps you take those installation files (which are usually in a format called an "ISO file") and put them onto a USB drive in a way that your computer can understand when it starts up.



| Here's a summary of how it works: |
|-------|
| 1. Download Rufus: You download the Rufus executable file from its official website (rufus.ie). It's a portable application, so you don't need to install it. |
| 2. Prepare your USB drive: Plug the USB drive you want to make bootable into your computer. Important: Make sure there's no important data on it, as the process will erase everything. The USB drive should be large enough to hold the ISO file you intend to use. |
| 3. Launch Rufus: Open the Rufus application by double-clicking the downloaded file. |
| 4. Select your USB drive: In the "Device" dropdown menu, choose the USB drive you inserted. |
| 5. Select the Boot Selection: Click the "Select" button next to "Boot selection" and browse to the ISO file (e.g., a Windows or Linux installation ISO) you want to write to the USB drive. |
| 6. Configure Settings (usually Rufus auto-configures well):<br>&nbsp;&nbsp;&nbsp;&nbsp;• Boot selection: Should be set to "Disk or ISO image"<br>&nbsp;&nbsp;&nbsp;&nbsp;• Partition scheme: Rufus often auto-selects the appropriate scheme (GPT for UEFI, MBR for older BIOS). If you're unsure, you can often leave it as the default or try GPT first for modern systems<br>&nbsp;&nbsp;&nbsp;&nbsp;• Target system: Usually adjusts based on the partition scheme. UEFI (non-CSM) for GPT, BIOS or UEFI-CSM for MBR<br>&nbsp;&nbsp;&nbsp;&nbsp;• File system: NTFS is generally recommended for Windows, FAT32 for broader compatibility<br>&nbsp;&nbsp;&nbsp;&nbsp;• Volume label: You can give your USB drive a name if you like |
| 7. Start the process: Click the "Start" button. Rufus will warn you that all data on the USB drive will be destroyed. Click "OK" to proceed. |
| 8. Wait for completion: Rufus will now write the ISO image to the USB drive. This may take several minutes. |
| 9. Close Rufus: Once the process is complete and the status shows "READY," you can close Rufus and safely eject your bootable USB drive. |

It's actually a really powerful thing. It lets you try out different operating systems, fix problems with your computer, or even install a fresh copy of Windows if things go wrong.

Learning to do this stuff can be a bit challenging at first. There are new terms, and it might feel like you're learning a whole new language. But trust me, it's worth it. It gives you a lot more control over your computer, and it opens up a whole world of possibilities.

'til next time, 
<br>Daddy