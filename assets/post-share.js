(() => {
  'use strict';

  const likeArea = document.querySelector('.like-area');
  if (!likeArea || document.querySelector('.post-share')) return;

  const canonicalUrl =
    document.querySelector('link[rel="canonical"]')?.href || window.location.href;
  const postTitle =
    document.querySelector('meta[property="og:title"]')?.content ||
    document.querySelector('.post-title')?.textContent?.trim() ||
    document.title;
  const encodedUrl = encodeURIComponent(canonicalUrl);
  const encodedTitle = encodeURIComponent(postTitle);

  const styles = document.createElement('style');
  styles.id = 'post-share-styles';
  styles.textContent = `
    .post-share {
      margin-left: auto;
      position: relative;
      z-index: 20;
    }
    .post-share-trigger {
      display: inline-flex;
      align-items: center;
      gap: .6rem;
      padding: .8rem 1.5rem;
      border: 1px solid rgba(196,180,154,.15);
      background: rgba(255,255,255,.03);
      color: var(--stone-light, #c4b49a);
      font-family: 'DM Mono', monospace;
      font-size: .68rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all .25s;
    }
    .post-share-trigger:hover,
    .post-share-trigger:focus-visible,
    .post-share-trigger[aria-expanded="true"] {
      background: rgba(184,92,56,.08);
      border-color: var(--terracotta, #b85c38);
      color: var(--terracotta, #b85c38);
      outline: none;
    }
    .post-share-trigger svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.7;
    }
    .post-share-menu {
      position: absolute;
      top: calc(100% + .5rem);
      right: 0;
      width: min(240px, calc(100vw - 3rem));
      padding: .5rem;
      background: #17100a;
      border: 1px solid rgba(196,180,154,.15);
      box-shadow: 0 18px 45px rgba(0,0,0,.42);
    }
    .post-share-menu[hidden] { display: none; }
    .post-share-option {
      width: 100%;
      display: flex;
      align-items: center;
      gap: .75rem;
      padding: .75rem .8rem;
      border: 0;
      background: transparent;
      color: var(--stone-light, #c4b49a);
      text-decoration: none;
      text-align: left;
      font-family: 'DM Mono', monospace;
      font-size: .64rem;
      letter-spacing: .08em;
      cursor: pointer;
      transition: background .18s, color .18s;
    }
    .post-share-option:hover,
    .post-share-option:focus-visible {
      background: rgba(184,92,56,.08);
      color: var(--terracotta, #b85c38);
      outline: none;
    }
    .post-share-option svg {
      width: 16px;
      height: 16px;
      flex: 0 0 16px;
      fill: none;
      stroke: currentColor;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.7;
    }
    .post-share-divider {
      height: 1px;
      margin: .35rem .5rem;
      background: rgba(196,180,154,.1);
    }
    .post-share-status {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border: 0;
    }
    @media (max-width: 600px) {
      .like-area {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .like-btn,
      .post-share {
        width: 100%;
      }
      .like-label {
        text-align: center;
      }
      .post-share {
        margin-left: 0;
      }
      .post-share-trigger { width: 100%; justify-content: center; }
      .post-share-menu { left: 0; right: 0; width: auto; }
    }
  `;
  document.head.appendChild(styles);

  const share = document.createElement('div');
  share.className = 'post-share';
  share.innerHTML = `
    <button class="post-share-trigger" type="button" aria-expanded="false"
      aria-haspopup="menu" aria-controls="post-share-menu">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"></path>
      </svg>
      Share this post
    </button>
    <div class="post-share-menu" id="post-share-menu" role="menu" hidden>
      <a class="post-share-option" role="menuitem" target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        Facebook
      </a>
      <a class="post-share-option" role="menuitem" target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4 4 20"></path></svg>
        X / Twitter
      </a>
      <a class="post-share-option" role="menuitem" target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/?text=${encodedTitle}%20${encodedUrl}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6z"></path><path d="M8.2 7.9c.3 3 2.1 5 5 5.8M13.8 13.7l1.2-1.3M8.2 7.9 9.5 7"></path></svg>
        WhatsApp
      </a>
      <a class="post-share-option" role="menuitem" target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"></path></svg>
        LinkedIn
      </a>
      <div class="post-share-divider" aria-hidden="true"></div>
      <button class="post-share-option post-share-copy" type="button" role="menuitem">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <span>Copy link</span>
      </button>
      <button class="post-share-option post-share-native" type="button"
        role="menuitem" hidden>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V3M7 8l5-5 5 5M5 13v7h14v-7"></path></svg>
        More sharing options
      </button>
    </div>
    <span class="post-share-status" aria-live="polite"></span>
  `;
  likeArea.appendChild(share);

  const trigger = share.querySelector('.post-share-trigger');
  const menu = share.querySelector('.post-share-menu');
  const copyButton = share.querySelector('.post-share-copy');
  const copyLabel = copyButton.querySelector('span');
  const nativeButton = share.querySelector('.post-share-native');
  const status = share.querySelector('.post-share-status');

  const setOpen = (open, returnFocus = false) => {
    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    if (open) menu.querySelector('[role="menuitem"]')?.focus();
    if (!open && returnFocus) trigger.focus();
  };

  trigger.addEventListener('click', () => {
    setOpen(trigger.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('click', (event) => {
    if (!share.contains(event.target)) setOpen(false);
  });
  share.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false, true);
    }
  });

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      copyLabel.textContent = 'Copied!';
      status.textContent = 'Post link copied to clipboard.';
      window.setTimeout(() => {
        copyLabel.textContent = 'Copy link';
      }, 1800);
    } catch {
      window.prompt('Copy this link:', canonicalUrl);
    }
  });

  if (typeof navigator.share === 'function') {
    nativeButton.hidden = false;
    nativeButton.addEventListener('click', async () => {
      try {
        await navigator.share({ title: postTitle, url: canonicalUrl });
        setOpen(false);
      } catch (error) {
        if (error?.name !== 'AbortError') {
          status.textContent = 'Sharing is unavailable. Please choose another option.';
        }
      }
    });
  }

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
})();
