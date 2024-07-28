<template>
    <!-- <h1>我是 Header Component</h1> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <!-- 收合按鈕 -->
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
            </button>
            <button
                class="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0)">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)"
                            >Portfolio</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style>

</style>
