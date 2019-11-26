<template>
  <div class="collapse navbar-collapse" id="navbar-collapse-1">
    <ul class="nav navbar-nav navbar-right">
      <li>
        <a href="#"><i class="fa fa-twitter"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-facebook"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-google-plus"></i></a>
      </li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-search"></i></a>
        <ul class="dropdown-menu">
          <div class="nav-search-form-wrapper">
            <form class="form-inline">
              <button type="submit" class="btn btn-default pull-right"><i class="glyphicon glyphicon-search"></i></button><input type="text" class="form-control pull-left" placeholder="Search">
            </form>
          </div>
        </ul>
      </li>
      <li class="share-li twitter-bg">
        <a href="#"><span>Tweet</span> <i class="fa fa-twitter"></i></a>
      </li>
      <li class="share-li facebook-bg">
        <a href="#"><span>Share</span> <i class="fa fa-facebook"></i></a>
      </li>
      <li class="share-li gplus-bg">
        <a href="#"><span>+1</span> <i class="fa fa-google-plus"></i></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'top'
}
</script>

<style scoped>

</style>
