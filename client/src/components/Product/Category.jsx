
<div className="shop-sidebar mb-4 mx-3">
    <h3 className="shop-sidebar-heading px-4 fw-normal">Browse Categories</h3>
    <div className="shop-sidebar-list p-4 bg-light">
        <form>
            <div className="shop-sidebar-type">
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio"
                        name="shop-categories" checked id='0' />
                    <label className="form-check-label" for='0'>All</label>
                </div>
                {/* //{{#each category}} */}
                <div className="form-check mb-2">
                    <input className="form-check-input" type="radio"
                        name="shop-categories" id={{ id }} onclick="window.location='?category={{id}}'" />
                    <label className="form-check-label" for="1"></label>
                </div>
                {/* {{/ each}} */}
            </div>
        </form>
    </div>
</div>