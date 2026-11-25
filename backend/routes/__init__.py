from dao import ProdutorDAO, DroneDAO, DefensivoDAO, UsuarioDAO
from models import Produtor, Drone, Defensivo, Usuario
from .crud_controller import CrudController, UsuarioController
from .auth_routes import auth_bp
from .aplicacao_routes import aplicacao_bp
from .relatorio_routes import relatorio_bp


def registrar_rotas(app):
    # CRUDs (cadastros)
    app.register_blueprint(CrudController("produtores", ProdutorDAO(), Produtor).blueprint)
    app.register_blueprint(CrudController("drones", DroneDAO(), Drone).blueprint)
    app.register_blueprint(CrudController("defensivos", DefensivoDAO(), Defensivo).blueprint)
    app.register_blueprint(UsuarioController(UsuarioDAO(), Usuario).blueprint)
    # movimento, login e relatórios
    app.register_blueprint(aplicacao_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(relatorio_bp)
