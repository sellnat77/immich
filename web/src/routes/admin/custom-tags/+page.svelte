<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  // import { api } from '@api';
  import CustomTagsPanel from '$lib/components/admin-page/custom-tags/custom-tags-panel.svelte';
  // import type { PageData } from './$types';

  // export let data: PageData;
  let setIntervalHandler: NodeJS.Timer;

  onMount(async () => {
    console.log('test');
    setIntervalHandler = setInterval(async () => {
      console.log('hello')
      // const { data: stats } = await api.serverInfoApi.getStats();
      // data.stats = stats;
    }, 5000);
  });

  onDestroy(() => {
    clearInterval(setIntervalHandler);
  });
</script>

<CustomTagsPanel />
